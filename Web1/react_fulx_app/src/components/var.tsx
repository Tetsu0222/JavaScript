//型推論
//明示的な変数の初期化を行うと、型推論により、自動的に型が決定される機能がある。

const age = 10
//console.log( age.length ) 型推論でnumberのため、エラーが発生する。
console.log( age )

const user = {
    name:'Takuya',
    age:36
}

//console.log( user.age.length ) 上記同様
console.log( user.name.length )


//関数の戻り値も同様
function getUser(){
    return {
        name:'Takuya',
        age:36
    }
}

const user2 = getUser()
//console.log( user2.age.length ) 戻り値でも同様


//配列の値も型推論される。
const names = [ 'Takuya' , 'Yoshiki' , 'Takeko' ]

names.forEach( ( name ) => {
    console.log( name.length )
})

