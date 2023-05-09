//keyofオペレーター
//その型が持つ各プロパティの型のUnion型を返す。

interface User{
    name:string;
    age:number;
    email:string;
}

type UserKey = keyof User   //'name' | 'age' | 'email'というUnion型になる。

const key1:UserKey = 'name'
//const key2: UserKey = 'phone' コンパイルエラーが発生
//第2引数で渡す型はnumberになっているため


//T[K]によって、キーに対応する型が戻り値の型となる。
function getProperty< T , K extends keyof T >( obj:T , key:K ) : T[K] {
    return obj[key]
}

const user:User = {
    name:'Takuya',
    age:36,
    email:'test@test'
}

//nameは型のキーに存在するため、正しくstring型の値が返る。
const userName = getProperty( user , 'name' )

//genderはオブジェクトのキーに存在しないため、コンパイルエラーが発生
//const userGender = getProperty( user , 'gender' )



