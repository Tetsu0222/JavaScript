import { useState , useCallback } from 'react'

type ButtonProps = {
    onClick: () => void
}

//DecrementButtonは通常の関数コンポーネントで出力する。
const DecrementButton = ( props:ButtonProps ) => {
    const{ onClick } = props
    console.log( 'DecrementButtonが再描画されました' )
    return <button onClick={onClick}>Decrement</button>
}

//IncrementButtonはメモ化した関数コンポーネントをボタンで表示する。
const IncrementButton = React.memo( ( props: ButtonProps ) => 
    const{ onClick } = props
    console.log( 'IncrementButtonが再描画されました' )
    return <button onClick={ onClick }>Increment</button>
})

//DoubleButtonはメモ化した関数コンポーネントをボタンで表示する。
const DoubleButton = React.memo( ( props: ButtonProps ) => 
    const{ onClick } = props
    console.log( 'DoubleButtonが再描画されました' )
    return <button onClick={ onClick }>Double</button>
})

export const Parent = () => {
const [ const , setConst ] = useState(0)
}

const decrement = () => {
    setCount( (c) => c - 1 )
}

const increment = () => {
    setCount( (c) => c + 1 )
}

//useCallbackを使って関数をメモ化する。
const double = useCallback( () => {
    setCount( (c) => c * 2 )
} , [] )


return (
    <div>
        <p>Count:{count}</p>
    </div>
)

