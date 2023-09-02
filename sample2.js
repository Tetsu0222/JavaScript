function check(){
    if( window.confirm( '削除してよろしいですか？' )){
        return true;
    }else{
         window.alert( 'キャンセルしました' );
        return false; 
    }
}


document.getElementById("cancel").onclick = function () {
    const currentPage = "{{$currentPage}}";
    location.href = "/admin/contact?page=" + currentPage;
}


//クリアボタンのエレメント取得
var clearBtn = document.querySelector( "#clear" );

//クリアボタンにイベントリスナーを設置
clearBtn.addEventListener( "click" , function( event ){
    clear();
})

//クリアボタンの押下に反応
function clear(){
    resetEditFormText();
}

//入力値のリセット
function resetEditFormText(){
    const form_array = [ "name" , "customer" , "position" ,
        "phone_number_1" , "phone_number_2" , "phone_number_3" , "mail" ];

    form_array.forEach( ( value ) => {
            document.getElementById( value ).value='';
    })
}


        //入力された文字を監視
        setting_monitoring();

        //再入力フラグ(エラーメッセージのリセット要否に使用)
        var need_resetError_massage = false;

        //問い合わせフォームのボタンに対応
        function input(){

            //非同期処理で入力値をDBへ登録
            const result = register_exe(); 
        };

        //非同期処理
        async function register_exe(){

            //フォームの属性の配列
            const form_array = [ "last_name" , "first_name" , "customer" , "position" , 
                                "phone_number_1" , "phone_number_2" , "phone_number_3" ,  
                                "mail" , "url" , "inquiry" ];

            //入力必須のフォーム属性の配列
            const form_required_array = [ "last_name" , "first_name" , "customer" ,  "mail" ,  "inquiry" ];

            try{
                //フォームの入力値を取得
                const postData = await create_FormData( form_array );

                //再入力に対応するため、エラーメッセージの表示をリセット(初回入力時は作動しないようにif文制御)
                if( need_resetError_massage ){
                    const reset = await resetErrorMessage();
                };

                //入力値をサーバーサイドへ送信
                const response = await fetch( 'register' , {
                    method:'POST',
                    headers:{ 'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content },
                    body: postData
                });

                //バリデーションチェックの結果を取得
                const result = await response.json();

                //バリデーションチェックの結果から、エラーの有無を取得
                const is_error = await result.is_error;

                //エラー箇所を抽出(エラーがなければ空の配列が戻ってくる) + (必須項目の漏れと入力値の誤りのエラーが混在)
                const error_list = await extract_error_list( result , is_error );

                //バリデーションチェックの結果に応じた最終処理
                const is_ok = await register_ok
                    ( is_error , error_list , form_array , postData , form_required_array );

            }catch( error ){
                alert( "登録が正常に行われませんでした。最初から入力をやり直してください" );
                window.location.reload();
                //resetFormText( form_array );    //入力内容をリセット
            };

        };

        //バリデーションチェックでエラーあり ? 該当のエラーメッセージ表示 : ユーザーへ登録完了を通知
        function register_ok
            ( is_error , error_list , form_array , postData , form_required_array ){

            switch( is_error ){

                //バリデーションチェックの結果に問題なし。
                case "none":
                    alert( "登録完了" );
                    window.location.reload();

                    //resetFormText( form_array );    //入力値やエラーメッセージ（出ていれば）をリセット
                break;

                //バリデーションチェックの結果に問題あり。
                case "valida_error":
                    //必須項目に対するエラーメッセージを表示 + エラーリストを入力値の誤りのものだけに絞り込み。
                    //※必須項目の未入力のエラーメッセージが入力値のエラーで上書きされないように分岐
                    const valida_error_list 
                        = required_error_display_and_valida_errorlist_create
                            ( postData , form_required_array , error_list );

                    //入力値誤りの発生箇所にだけエラーメッセージを表示させる。
                    valida_error_list.forEach( valida_error_display );

                    //再入力時、エラーメッセージのリセットが作動するようにフラグ変更
                    need_resetError_massage = true; 

                    //エラーが出ていることを赤枠でユーザーへ通知（入力値、必須項目のエラー共通で表示）
                    document.getElementById( "alert" ).style.display = "block";
                break;
            };
        };

        //-------------------------------------------------------------------------
        //---------------------------処理関数のエリア-------------------------------
        //-------------------------------------------------------------------------

        //入力値からフォームデータを生成
        function create_FormData( form_array ){

            const formData = new FormData;

            let indexNo = 1;    //トークンが含まれているため、0からではなく1から開始
            
            //form_arrayは各種formの属性の配列、メソッド呼び出し時の引数
            form_array.forEach( ( value ) => {
                var inputData = document.myform[indexNo].value;
                formData.set( value , inputData );
                indexNo++;
            });
            return formData;
        };

        //エラーメッセージのリセット
        function resetErrorMessage(){

            //エラーメッセージの属性配列
            const error_array = [ "name_error" , "customer_error" , "position_error" ,
                                "telephone_error" , "mail_error" , "url_error" ,
                                "inquiry_error" ];

            document.getElementById( "alert" ).style.display = "none";

            error_array.forEach( ( value ) => {
                document.getElementById( value ).innerHTML = "";
            });
        };

        //入力値のリセット
        function resetFormText( form_array ){

            //入力値のリセット
            form_array.forEach( ( value ) => {
                document.getElementById( value ).value='';
            });

            //エラーメッセージが出ていれば、すべてリセット、フラグも畳む。
            if( need_resetError_massage ){
                resetErrorMessage();
                need_resetError_massage = false;
            };
        };

        //バリデーションチェックの結果に応じて、発生しているエラー箇所を抽出する。
        function extract_error_list( result , is_error ){

            const error_list = [];

            //バリデーションチェックの結果に問題なければ、空のリストを返して処理中断
            if( is_error == "none" ){
                return error_list;
            };

            //オブジェクトからキーだけを抽出
            const error_keys = Object.keys( result.errors );

            Object.keys( error_keys ).forEach( ( key ) => {
                    const error = error_keys[key];
                    error_list.push( error + "_error" );
                });

            return error_list;
        };

        //入力値のエラーメッセージを表示させる。
        function valida_error_display( value ){

            //エラー箇所に応じてメッセージ表示処理を分岐
            switch( value ){

                //名前のエラーメッセージを表示
                case "last_name" :
                case "first_name" :
                    document.getElementById( "name_error" ).innerHTML 
                        = "使用できない文字が含まれています。";
                break;

                //URLのエラーメッセージを表示
                case "url_error":
                    document.getElementById( "url_error" ).innerHTML 
                        = "URLの形式ではありません。";
                break;

                //メールアドレスのエラーメッセージを表示
                case "mail_error":
                    document.getElementById( "mail_error" ).innerHTML 
                        = "メールアドレスの形式ではありません。";
                break;

                //電話番号のエラーメッセージを表示
                case "telephone_error":
                    document.getElementById( "telephone_error" ).innerHTML 
                        = "電話番号の形式ではありません。";
                break;

                //上記以外の項目のエラーメッセージを表示
                default:
                    document.getElementById( value ).innerHTML 
                        = "使用できない文字が含まれています。";
                break;
            };
        };

        //必須項目の未入力をチェック + エラーリストから入力値の誤りのものだけを抽出
        function required_error_display_and_valida_errorlist_create
            ( postData , form_required_array , error_list ){

            //form_required_arrayは各種formの属性における入力必須項目の配列、メソッド呼び出し時の引数
            form_required_array.forEach( ( value ) => {

                //必須項目と入力値を突合、未入力を検出
                var inputData = postData.get( value );

                let error_type;

                switch( value ){

                    //名前のエラーは、表示箇所を統一化
                    case "last_name" :
                    case "first_name":
                        error_type = "name_error";
                    break;

                    default:
                        error_type = value + "_error";
                    break;
                };

                //必須項目のエラー表示とエラーリストを入力値のエラーだけに絞り込み。
                if( inputData === "" || inputData == null ){
                    document.getElementById( error_type ).innerHTML
                        = "この項目は必ず入力してください";
                    var index = error_list.indexOf( error_type );
                    error_list.splice( index , 1 );
                };
            });

            return error_list;  //入力値の誤りのみに絞り込み済
        };


        //最大文字数に到達するとエラーメッセージを表示
        function input_length_monitoring( input , attribute ){

            //属性別の最大文字数を取得
            var max = document.getElementById( attribute ).maxLength;

            document.getElementById( attribute + "_size_error" ).innerHTML =
                input.length == max ?
                 "最大文字数の" + max + "文字に到達しました。" 
                : "";
        };

        //半角入力されるとエラーメッセージを表示
        function input_full_width_monitoring(input,attribute){

            document.getElementById(attribute + "_error").innerHTML =
                input.match( /^[^\x01-\x7E\xA1-\xDF]+$/ ) || input === "" ?
                "" 
                : "半角文字が入力されています。";
        };

        //全角入力されるとエラーメッセージを表示
        function input_half_width_monitoring(input,attribute){

            document.getElementById(attribute + "_error").innerHTML =
                input.match( /^[A-Za-z0-9]*$/ ) || input === "" ?
                "" 
                :"全角文字が入力されています。";
        };

        //メールアドレス以外の形式で入力されるとエラーメッセージを表示
        function input_mail_monitoring(input,attribute){

            document.getElementById( attribute + "_error" ).innerHTML =
            input.match( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) 
                || input === "" ?
                ""
                :"メールアドレスの形式ではありません。";
        };

        //URL以外の形式で入力されるとエラーメッセージを表示
        function input_url_monitoring(input,attribute){

            document.getElementById(attribute + "_error").innerHTML =
                input.match( /^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/ ) || input === "" ?
                "" 
                :"URLの形式ではありません。";
        };

        //フォームにインプットで発火するイベントリスナーを設置
        function setting_monitoring(){

            const form_array = [ "last_name" , "first_name" , "customer" , "position" ,
                                    "phone_number_1" , "phone_number_2" , "phone_number_3" ,   
                                    "mail" , "url" ];

            form_array.forEach( monitoring_input );          
        };

        //入力された文字を監視するイベントリスナーを設置
        function monitoring_input( value ){

            let text = document.getElementById( value );

            text.addEventListener( 'input' , 
                { name: value , handleEvent: all_input_monitoring } );
        };

        //入力値を実際に監視（イベントリスナーに設置する関数）
        function all_input_monitoring( event ){

            //入力された値
            var input = event.currentTarget.value;

            //フォーム属性を文字として格納
            var attribute = this.name;

            //フォームの項目に応じて監視条件を分岐する。
            switch( attribute ){

                //全角入力がされているか監視
                case "customer":
                case "position":
                    input_full_width_monitoring( input , attribute );
                    input_length_monitoring( input , attribute );
                break;

                //名前の監視
                case "last_name":
                case "first_name":
                    input_name_monitoring();
                    input_name_length_monitoring();
                break;

                //メールアドレスの形式か監視
                case "mail":
                    input_mail_monitoring( input , attribute );
                    input_length_monitoring( input , attribute );
                break;

                //URL形式か監視
                case "url":
                    input_url_monitoring( input , attribute );
                    input_length_monitoring( input , attribute );
                break;

                //電話番号（半角数字）か監視
                case "phone_number_1" :
                case "phone_number_2" :
                case "phone_number_3" :
                    input_half_number_monitoring( input );
                break;

                //default分岐は不正値のため例外スロー
                default:
                    throw new Exception();
            };
        };

        //名前の監視、姓と名が連動して不適切な入力があるとエラーメッセージを表示
        function input_name_monitoring(){

            let inputLastName = document.getElementById('last_name').value;
            let inputFirstName = document.getElementById('first_name').value;

            //姓と名の両方に文字が入力されていない場合は、エラーメッセージを表示させない。
            if( inputLastName == "" && inputFirstName == "" ){
                document.getElementById( "name_error" ).innerHTML = "";
                return;
            };

            let is_lastName_error = input_name_is_error( inputLastName );
            let is_firstName_error = input_name_is_error( inputFirstName );

            //姓と名のバリデーションチェックの結果が問題なければ、エラーメッセージを表示させない。
            if( is_lastName_error && is_firstName_error ){
                document.getElementById( "name_error" ).innerHTML = "";
                return;
            };

            //姓か名のどちらかが未入力であった場合のエラーメッセージを表示
            //両方とも入力されているが、全角以外の文字が含まれている場合は、その旨をエラーメッセージとして表示
            document.getElementById( "name_error" ).innerHTML =
                inputLastName == "" ||  inputFirstName == "" ? "未入力の箇所があります。" : "半角文字が入力されています。";
        };

        //名前の監視、姓と名のそれぞれのバリデーションチェックの結果を真偽値で返す。
        function input_name_is_error( input ){

            if( input.match( /^[^\x01-\x7E\xA1-\xDF]+$/ ) ){
                return true;
            }
            
            return false;
        };

        //電話番号の監視、3枠連動してバリデーションチェックを実施する。
        function input_half_number_monitoring(){

            let phone_number_1 = document.getElementById('phone_number_1').value;
            let phone_number_2 = document.getElementById('phone_number_2').value;
            let phone_number_3 = document.getElementById('phone_number_3').value;

            //電話番号に文字が入力されていない場合は、エラーメッセージを表示させない。
            if( phone_number_1 == "" && phone_number_2 == "" && phone_number_3 == "" ){
                document.getElementById( "telephone_error" ).innerHTML = "";
                return;
            };

            let is_phone_number_1_error = input_phone_number_monitoring( phone_number_1 );
            let is_phone_number_2_error = input_phone_number_monitoring( phone_number_2 );
            let is_phone_number_3_error = input_phone_number_monitoring( phone_number_3 );

            //3枠のすべてのバリデーションチェックに問題なければエラーメッセージを表示させない。
            if( is_phone_number_1_error && is_phone_number_2_error && is_phone_number_3_error ){
                document.getElementById( "telephone_error" ).innerHTML = "";
                return;
            };

            //3枠の内、1枠か2枠の未入力があるとエラーメッセージを表示
            //すべての枠が入力されているが、不適切な文字が含まれているとエラーメッセージを表示
            document.getElementById( "telephone_error" ).innerHTML = 
                phone_number_1 == "" ||  phone_number_2 == "" || phone_number_3 == "" ?
                "未入力の箇所があります。" : "半角数字以外が入力されています。";
        };

        //電話番号の監視、3枠それぞれのバリデーションチェックの結果を真偽値で返す。
        function input_phone_number_monitoring( input ){

            if( input.match( /^[0-9]+$/ ) ){
                return true;
            }
            
            return false;
        };

        //ご担当者様の姓か名のいずれかが最大文字数に到達するとエラーメッセージを表示
        function input_name_length_monitoring(){

            //属性別の最大文字数を取得
            const max_length = 15;

            let inputLastName = document.getElementById('last_name').value;
            let inputFirstName = document.getElementById('first_name').value;

            //最大文字数に到達した場合は、エラーメッセージを表示
            document.getElementById( "name_size_error" ).innerHTML =
                inputLastName.length >= max_length || inputFirstName.length >= max_length ?
                "最大文字数の" + max_length + "文字に到達しました。"
                : "";
        };
