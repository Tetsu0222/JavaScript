
import { GetStaticPaths , GetStaticProps , NextPage } from 'next'
import Head from 'next/head'

type SSRProps = {
    message:string
}

const SSR:NextPage<SSRProps> = ( props ) => {
    const{ message } = props

    return (
        <div>
            //ページ情報
        </div>
    )
}

//getServerSidePropsはページへのリクエストがある度に実行される。
export const getServerSideProps:GetServerSideProps<SSRProps> = async (
    context 
) => {
    const timestamp = new Date().toLocaleString()
    const message = '実行'
    console.log( message )

    return{
        props:{
            message ,
        },
    }
}

export default SSR