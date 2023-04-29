import Link from 'next/link'
import { useRouter } from 'next/router'

//ssrへ遷移するためのリンクを作成する。
//<a>タグをラップする。
<Link href = "ssr">
    <a>Test</a>
</Link>


//herfに文字列ではなくオブジェクトを指定できる。
<Link href = {{
    pathname:'/ssg',
    query: { keyword:'hello'},
}}>
    <a>Test</a>
</Link>


//<a>要素ではなくボタンを使用
//子コンポーネントへonclickコールバックが渡され、コールバックが呼ばれるとページが遷移する。
<Link href = "/ssg">
    <button>Jump Test</button>
</Link>


//routerオブジェクトのpushメソッドを呼ぶことで画面を遷移させることができる。
const router = useRouter()

const onSubmit = () => {
    router.push( '/ssr' )
}

//文字列の代わりにオブジェクトを指定
router.push({
    pathname:'/ssg'
    query:{ keyword:'hello'},
})


//呼ぶとリロードされる。
router.reload();

//呼ぶと前のページに戻る。
router.back()

//遷移開始時のイベントを購読する。
router.events.on( 'routeChangeStart' , ( url , { shallow }) => {
    //urlには遷移先のパスが与えられる。
    //shallowはシャロールーティング（パスのみが置き換わる遷移）の場合はtrueになる。
})

//遷移完了時のイベントを購読する。
router.events.on( 'routeChangeComplete' ,  ( url , { shallow }) => {
    //上記と同様
})