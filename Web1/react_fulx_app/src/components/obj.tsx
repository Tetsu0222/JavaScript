//オブジェクト型

//{ キー名1:型1; キー名2:型2;}
//let 変数:{ キー名:型;} = オブジェクト

//string型のnameとnumber型のageのみを持つオブジェクトを定義(型だけ)
const user:{ name:string; age:number } = {
    name:'Tanaka',
    age:36
}

console.log( user.name )
console.log( user.age )


//オブジェクトのプロパティは？を用いてオプショナルとして扱うことができる。
//その場合、プロパティが存在しなくても、問題なく動作する。
function printName( obj:{ firstName:string; lastName?:string }){
    //処理
}

//どちらの呼び出し方法であっても動作する。
printName( { firstName:'Takuya' })
printName( { firstName:'Takuya' , lastName:'Tegima' })