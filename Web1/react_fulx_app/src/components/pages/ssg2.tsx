//getStaticPropsを用いたSSGによるページの実装
//上記の関数を定義して実行すると、その関数はビルド時に実行され、戻り値としてpropsが返る。


import { GetStaticProps , NextPage , NextPageContext } from 'next'
import Head from 'next/head'


//ページコンポーネントのpropsの型定義
type SSGProps = {
    message:String
}

//SSGはgetStaticPropsが返したpropsを受け取ることができる。
//Nextpage<SSGProps>はmessage:strignのみを受け取って生成されるページの型
const SSG:NextPage<SSGProps> = ( props ) => {
    const { message } = props

    return (
        //ページ
    )
}


//getStaticPropsはビルド時に実行される。
export const getStaticProps:GetStaticProps<SSGProps> = async( context ) => {
    const message = '${timestamp}にgetStaticPropsが実行されました'
    console.log( message )
    return {
        //ここで返されたpropsを元にページコンポーネントを描画する。
        props:{
            message ,
        },
    }
}

export default SSG
