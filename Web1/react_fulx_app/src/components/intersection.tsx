//Intersection型
//型の積集合を意味する。
//複数の型をマージして1つの型となったものを生成する。

type Indentity = {
    id:number | string;
    name:string;
}

type Contact = {
    name:string;
    email:string;
    phone:string;
}

//複数の型をマージする。
type Employee = Indentity & Contact


//二つの型がマージして4種類の型を持つ（nameは重複しているため1でカウント)
const employee:Employee = {
    id:'111',
    name:'Takuya',
    email:'test@test',
    phone:'0120000000'
}


/* Contactだけでは定義できずにエラーが発生する。
const employee2:Employee = {
    name:'Takuya',
    email:'test@test',
    phone:'0120000000'
}
*/



