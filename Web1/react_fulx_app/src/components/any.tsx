
//any型
//すべての型を許容する型

let user: any = { firstName:'Takuya' }

//以下はすべてコンパイルエラーにならない。
user.hello()
user()
user.age = 100
user = 'hello'

//他の型へ代入してもエラーは発生しない。
const n:number = user

