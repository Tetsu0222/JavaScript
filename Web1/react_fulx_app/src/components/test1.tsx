import { useState } from 'react'

type CounterProps = {
    initialValue:number
}

//カウントを保持する1つの状態をuseState()で宣言する。引数には初期値を指定
//countが現在の状態、setCOuntが状態を更新する関数
const Counter = ( props:CounterProps ) => {
    const{ initialValue } = props
    const[ count , setCount ] = useState( initialValue )

    return(
        <div>
            <p>Count:{count}</p>
            <button onClick = { () => setCount( count - 1 )}>-</button>
            <butoon onClick = { () => setCount(( prevCount ) => precCount + 1 )}>+</butoon>
        </div>
    )
}

export default Counter