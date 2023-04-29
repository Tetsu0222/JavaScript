//SSGで1ページ毎対応していくと、動的なサイトに対応することができない。
//その場合は、動的ルーティング機能を用いる。
//getStaticPathsはgetStaticProps実行前に呼ばれる関数で、生成したいページのパスパラメータの組み合わせとフォールバックを返す。
//fallbackはgetStaticPathsが生成するページが存在しない場合の処理を記述する。


import { GetStaticPaths , GetStaticProps , NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import{ ParseUrlQuery } from 'querystring'

type PostProps = {
    id:string
}

const Post: NextPage<PostProps> = ( props ) => {
    const { id } = props
    const router = useRouter()

    if( router.isFallback ){
        //フォールバック向けの表示を返す。
        return <div>Loading...</div>
    }

    return(
        <div>
            //ページ情報
        </div>
    )
}


//getStaticPathsは生成したいページのパスパラメータの組み合わせを返す。
export const getStaticPaths:GetStaticPaths = async () => {
    const paths = [
        {
            params:{
                id:'1' ,
            },
        },
        {
            pparams:{
                id:'2',
            },
        },
        {
            params:{
                id:'3'
            },
        },
    ]

    //fallbackをfalseにすると、pathsで定義されたページ以外は404を表示する。
    return ( paths, fallback: false )
}

//パラメータの型を定義
interface PostParams extends ParsedUrlQuery {
    id:string
}

//getStaticPaths実行後に、それぞれのパスに大してgetStaticPropsが実行される。
export const getStaticProps:GetStaticProps<Props , PostParams> = async( context ) => {
    return {
        props:{
            id:context.params![id],
        },
    }
}

export default Post

