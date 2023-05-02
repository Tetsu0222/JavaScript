//Optional Chaining

//ネストされたオブジェクトのプロパティが存在するかどうか条件分岐を簡単に記述できる機能
//?をプロパティアクセス時に用いることで記述ができる。
//nullやundefinedになりうるオブジェクトを安全に処理する記述が可能

//nullになり得るsocialというプロパティを定義
interface User {
    name:string
    social?:{
       facebook:boolean
       twitter:boolean
    }
}

let user : User
user = { name:'Takuya' , social:{ facebook:true , twitter:true }}
console.log( user.social?.facebook ) //trueが出力

user = { name:'Takuya' }
console.log( user.social?.facebook )    //socialが存在しなくともエラーにならない。