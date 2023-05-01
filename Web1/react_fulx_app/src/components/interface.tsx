//インターフェース
//エイリアスと似ているが、より拡張性の高いオープンな機能を持っている。

//interface 型名{ プロパティ1:型; }

//インターフェースを定義
interface Point {
    x:number;
    y:number;
}

//インターフェースを使用する関数
function printPoint( point:Point ){
    console.log( 'x座標は${point.x}です' )
    console.log( 'y座標は${point.y}です' )
    console.log( 'z座標は${point.z}です' )  //後から追加されている。
}

//後から座標zを追加(拡張している)
interface Point{
    z:number;
}

//引数のオブジェクトにzが存在しないためエラーとなる。
//printPoint( { x:100 , y:100 })


//問題なく動作する。
//インターフェースは後から拡張できる。
printPoint( { x:100 , y:100 , z:100 })

//インターフェースはクラスの振る舞いの型を定義し、implementsを使用してクラスに実装を委譲できる。
interface Point2 {
    x:number;
    y:number;
    z:number;
}

//インターフェースを継承したクラスを定義
class MyPoint implements Point2 {
    x:number;
    y:number;
    z:number;
}


//インターフェースのプロパティでzが欠けているため、エラーとなる。
/*
class MyPoint2 implements Point2 {
    x:number;
    y:number;
}
*/


//インターフェースの型定義にオプショナルの使用が可能
interface Point3 {
    x:number;
    y:number;
    z?:number;
}


//オプショナルで定義されているプロパティは実装しなくてもエラーにならない。
class MyPoint3 implements Point3 {
    x:number;
    y:number;
}


//extendsで他のインターフェースを拡張可能
interface Colorful{
    color:string
}

interface Circle{
    radius:number
}

//複数のインターフェースを継承して新たなインターフェースを定義
interface ColorfulCircle extends Colorful , Circle{}

const cc : ColorfulCircle = {
    color:'赤' ,
    radius:10
}


//オブジェクトの型を定義する際に、インターフェースもエイリアスもどちらも利用可能
//継承による細かな機能の違いはあるが、機能としてはほぼ同等

//インターフェースはクラスやデータの一側面を定義した型、つまり、クラスやメソッド、関数などの実装に関わる部分で使用
//エイリアスはオブジェクトの型そのものを表す時に使用と、それぞれで使い分ける。

