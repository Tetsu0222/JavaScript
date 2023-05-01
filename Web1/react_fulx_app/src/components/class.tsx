//クラス

//クラス記法に対して型付け可能
/*
class クラス名{
    フィールド1:型1;
}
*/


//クラスを定義
class Point {
    x:number;
    y:number;

    //引数がない場合の初期値を規定
    constructor( x:number = 0 , y:number = 0 ){
        this.x = x
        this.y = y
    }

    //戻り値がない関数を定義するためにvoidを指定
    moveX( n:number ):void {
        this.x += n
    }

    moveY( n:number ):void {
        this.y += n
    }
}

const point = new Point()
point.moveX( 10 )
console.log( '${point.x} , ${point.y}' ) //10,0が出力


//クラスはextendsを用いて他のクラスを継承できる。
class Point3D extends Point {
    z:number;

    //継承元のコンストラクタを呼び出す。
    constructor( x:number = 0 , y:number = 0 , z:number = 0 ){
        super( x , y )
        this.z = z
    }

    moveZ( n:number ):void{
        this.z += n
    }
}

const point3D = new Point3D()
point3D.moveX( 10 ) //継承元のメソッドを呼び出せる。
point3D.moveZ( 20 )
console.log( '${point3D.x} , ${point3D.y} , ${point3D.z}' ) //10 , 0 , 20 が出力


//インターフェースに対してimplementsを利用することで、クラスに対する実装の強制が可能
interface IUser{
    name:string;
    age:number;

    sayHello:() => string;  //引数なしで文字列を表すメソッド
}


//実装先のクラス
class User implements IUser {
    name:string;
    age:number;

    constructor(){
        this.name = ''
        this.age = 0
    }

    //インターフェースに定義されているメソッドを実装
    //これを実施しないとエラーが出る。
    sayHello():string {
        return 'こんにちは、私は${this.name} , ${this.age}歳です'
    }
}


//アクセス修飾子
class BasePoint3D{
    public x:number;
    private y:number;
    protected z:number;
}

const basePoint = new BasePoint3D()
basePoint.x
//basePoint.y アクセスできないためエラーが発生する。






