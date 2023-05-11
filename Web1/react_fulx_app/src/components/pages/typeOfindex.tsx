//インデックス型

//インデックス型を用いると、オブジェクトのプロパティが可変の時、まとめた型を定義できる。

//プロパティ名を任意のnumberとして扱う型の定義
type SupportVersions = {
    [env:number] : boolean;
}

let versions:SupportVersions = [
    102:false,
    103:false,
    104:true
]