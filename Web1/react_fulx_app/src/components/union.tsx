//Union型
//和集合を意味する型
//複雑な型を表現する際に使用する。

//変数や引数の宣言時に、Union型を指定して、numberもしくはstringを受け付ける。
function printId( id:number | string ){
    console.log( id )
}

//numberでもstringでも機能する。
printId( 11 )
printId( 'test' )

//型エイリアスとして定義も可能
type Id = number | string

function printId2 ( id:Id ){
    console.log( id )
}

//型エイリアス同士を掛け合わせて、新たな型を生成できる。
type Indentity = {
    id:number | string;
    name:string;
}

type Contact = {
    name:string;
    email:string;
    phone:string;
}

//和集合による新たなUnion型を定義する。
//IdentityかContactの型を受け取ることが可能
type IdentityOrContact = Indentity | Contact


//Indentityで判定されるためエラーが出ない。
const id : IdentityOrContact = {
    id:'111',
    name : 'Takuya'
}

//Contactと判定されるためエラーが出ない。
const id2:IdentityOrContact = {
    name : 'Takuya',
    email:"test@test",
    phone:'0120000000'
}
