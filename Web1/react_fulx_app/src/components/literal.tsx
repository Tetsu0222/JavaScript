//リテラル型
// |でデータを区切るリテラル型を用いると、決まった文字列や数値しか入らないとする型の制御が可能となる。
//変数:許可するデータ1 | 許可するデータ2

let postStatus: 'dract' | 'published' | 'deleted'
postStatus = 'dract'
//postStatus = 'dractTest' //型宣言にない文字列が割り当てられているため、エラーが発生する。

//-1,0,1のいずれかしか返さない型情報を定義
function compare( a:string , b:string ): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1 
}