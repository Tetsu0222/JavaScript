//型ガード

//if文やswitch文の条件分岐にて型のチェックを行った際、その条件分岐ブロック以降は変数の型を絞り込まれる推論が実施される。


//numberとstringのUnion型で定義された引数をtypeofを用いてstring型の判定をするif文を記述
function addOne( value : number | string ){
    if( typeof value === 'string' ){
        return Number( value ) + 1
    }
    return value + 1
}

//呼び出した関数において型ガードが働いているため、if文以降の型もnumber型として判定される。
console.log( addOne( 10 )) //11
console.log( addOne( '20' )) //21 string型で呼び出すことはできるが、引数がstringであっても、戻り値はnumberとして扱われる。

//asを用いる型アサーションよりも安全に利用できる。

