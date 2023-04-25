function sleep( ms ){

    const startTime = new Date();
    while( new Date() - startTime < ms );
    alert( "sleep関数が完了しました" );

    sleep( 3000 );

    const btn = document.querySelector( "button" );
    function clickhandler(){
        alert( "ボタンがクリックされました。" );
    }
    
    btn.addEventListener( "click" , clickhandler );
}