import { GetStaticPaths , GetStaticProps , NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

type ISRProps = {
    message:string
}

//ISRPropsを受け付けるNextPageの型
const ISR:NextPage<ISRProps> = (props) => {
    const{ message } = props
    const router = useRouter()

    if( router.isFallback){
        return <div>フォールバック中</div>
    }

    return (
        <div>
            //ページ情報
        </div>
    )
}

export const getStaticProps:GetStaticProps<ISRProps> = async (context) => {
    const timestamp = new Date().toLocaleDateString()
    const message = "${timestamp}にこのページが実行されました"

    return {
        props:{
            message ,
        },
        revalidate:60,
    }
}

export default ISR