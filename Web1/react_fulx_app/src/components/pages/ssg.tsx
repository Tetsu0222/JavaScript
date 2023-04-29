//SSGによるページの実装(厳密にはStatic)

import { NextPage } from 'next'
import Head from 'next/head'

//ページコンポーネントのpropsの型定義
type SSGProps = {}

//SSG向けのページを実装
const SSG :NextPage<SSGProps> = () => {
    return (
        <div>
            //ページ情報
        </div>
    )
}

//ページコンポーネントはexport defaultでエクスポートする。
export default SSG