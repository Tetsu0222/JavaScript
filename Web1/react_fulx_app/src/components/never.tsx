//never型

//never型は決して発生しない値の種類を表す。
//常に例外を発生させる関数などで決して値が返ってこないように戻り値の型をneverと定めることがある。

function error( message : string ) : never {
    throw new Error( message )
}


function foo( x : string | number | number[] ) : boolean {
    if( typeof x === 'string' ){
        return true
    }else if( typeof x === 'number' ) {
        return false
    }

    //neverを使用することで、明示的に値が返らないことをコンパイラに伝えることができる。
    //neverを使用しないとコンパイルエラーになる。
    return error( 'Never happens' )
}


//他の有効活用として、ifやswitc文で型の条件分岐に漏れがないことを保証するケースがある。

//将来的に定数が追加される可能性のあるEnum型を定義
enum PageType{
    ViewProfile,
    EditProfile,
    ChangePassword,
}

const getTitleText = ( type : PageType ) => {
    switch( type ){
        case PageType.ViewProfile:
            return 'Setting'

        case PageType.EditProfile:
            return 'Edit Profile'
        
        case PageType.ChangePassword:
            return 'Change Password'

        //決して起きないことをコンパイラに伝えるnever型に代入を行う。
        //将来的に、enum型に定数が新規追加された際に、エラーが起きるバグを未然に防ぐことが可能
        default:
            const wrongType : never = type
            throw new Error( '${wrongType} is not in PageType' ) //どのケースにも該当しなかった場合は、値が返らないことをコンパイラへ知らせている。
    }
}



