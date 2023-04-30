//関数
//function 関数名(引数の変数名と型):戻り値の型


//TSの関数では、引数と戻り値に型を指定できる。
function sayHello( name:string ) : string {
    return 'Hello ${name}'
}

sayHello( 'Takuya' )



//引数は？でオプショナルとして定義も可能
function sayHello2( name:string , greeting?:string ) : string {
    return '${greeting} ${name}'
}

//呼び出し方はどちらでも可
sayHello2( 'Takuya' )
sayHello2( 'Takuya' , 'Hello' )



//引数定義の際に、デフォルトの値を指定可能
//関数の呼び出し元がその引数を指定しない場合に値がセットされる。
function sayHello3( name:string , greeting:string = 'Hello' ):string {
    return '${greeting} ${name}'
}

sayHello2( 'Takuya' ) //Hello Takuyaが出力
sayHello2( 'Takuya' , 'Hey' ) //Hey Takuyaが出力



//名前とフォーマット関数を引数として受け取り、フォーマットを実行して、コンソール出力を行う関数
function printName( firstName:string , formatter:( name:string ) => string ){
    console.log( formatter( firstName ))
}

//sanを末尾につける名前のフォーマット関数を定義
function formatName( name:string ):string{
    return '${name} san'
}

//Takuya sanが出力
printName( 'Takuya' , formatName )


//補足
//アロー関数の型
//( 引数名：引数の型 ):戻り値の型 => JSの式
let sayHello4 = ( name:string ) : string => 'Hello ${name}'


//関数の型
//( 引数:引数の型 ) => 戻り値の型
function getBirdsInfo( name:string ):string[]{
    return name.split(',')
}

//関数の型を使用
function singleBirds( birdInfo:( x:string ) => string[] ) : string {
    return birdInfo( 'hato , kihi' )[0] + 'piyo piyo'
}


console.log( singleBirds( getBirdsInfo ))

//console.log( singleBirds( 'dobato' )) 型が合わないためエラーとなる。
