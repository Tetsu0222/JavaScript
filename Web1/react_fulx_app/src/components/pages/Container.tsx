//Container Componentでは、振る舞いだけを実装する。
//Contextを参照しPresentationalへ表示に必要なデータを渡す。


//ポップアップを表示するためのフック
const usePopup = () => {

    //与えられたテキストを表示するポップアップを出現させる関数
    const cb = useCallback(( text:string ) => {
        prompt( text )
    }, [])

    return cb
}

type CountButtonProps = {
    label:string
    macimum:number
}

//クリックされた回数を表示するボタン（を表示するコンポーネント）
export const CountButton = (props:CountButtonProps) => {
    const { label , maximum } = props

    //アラートを表示させるためのフックを使う
    const displayPopup = usePopup()

    //カウントを保持する状態を定義する。
    const [ count , setCount ] = useState(0)
}