//ジェネリック型
//クラスや関数において、扱う型を抽象化し、外部から具体的な型を指定できる機能
//外部から指定される型が異なっても、動作するような汎用的なクラスや関数を実装する際に便利

//Tは仮の型名
class Queue<T>{
    //内部にT型の配列を初期化する。Tの型は呼び出した時に定義される。
    private array:T[] = []


    //Tの型の値を配列に追加する。
    push( item:T ){
        this.array.push( item )
    }

    //T型の配列を最初から取り出す。
    pop():T | undefined{
        return this.array.shift()
    }
}


//数値型を扱うキューを生成
const queue = new Queue<number>()

queue.push( 111 )
queue.push( 112 )
//queue.push( 'hoge' ) ジェネリックによって型違いと判断されてエラーが発生する。
