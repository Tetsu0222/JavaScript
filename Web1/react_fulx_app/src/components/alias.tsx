//型エイリアス
// type 型名 = 型

//型に別名を付けることができるため、使いまわすことができ、コードの複雑さを緩和する。

type Name = string


//Pointを型エイリアスとして指定
type Point = {
    x:number;
    y:number;
}

//pointの型をPoint(エイリアス)で扱う。
function printPoint( point : Point ){
    console.log( 'x座標は${point.x}です' )
    console.log( 'y座標は${point.y}です' )
}

printPoint( { x:100 , y:100 } )


//関数自体の型もエイリアスで定義可能
type Formatter = ( a:string ) => string

function printName( fristName : string , formatter:Formatter ){
    console.log( formatter( fristName ))
}


//オブジェクトのキー名を明記せずに型エイリアスを定義できる。
//インデックス型とも呼ばれるエイリアスで、キー名やキー数が事前に定まらないケースのオブジェクトを定義したいときに便利
//{ [] : 型名 }

//インデックス型のエイリアスを定義
type Label = {
    [ key : string ] : string
}

//キー名やキー数が一致していなくても可
const labels:Label = {
    topTitle : 'トップページのタイトルです',
    topSubTitle: 'トップページのサブタイトルです',
    topFeature1: 'トップページの機能です'
}

const Labels2:Label = {
    topTitle : 'トップページのタイトルです',
    topSubTitle: 'トップページのサブタイトルです',
}

const hoge :Label = {
    topTitle : 'トップページのタイトルです'
    //message:100 値の型が合わないためエラー発生
}