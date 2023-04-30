//letを使って変数宣言した場合は、ブロックスコープ内だけでその変数は参照可能となる。
function calc( isSum: boolean ){
    let a = 100

    //aが定義されたブロックスコープ内のためエラーにはならない。
    if( isSum ){
        let b = a + 1
        return b
    }

    //bをvarで定義した場合はエラーにならないが、letで定義するとスコープ外でエラーとなる。
    return b
}


//constは定数であり、再代入はできない。
const num: number = 100

//ここでコンパイルエラーが発生する。
num = 200