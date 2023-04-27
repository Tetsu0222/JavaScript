import { useState } from 'react'

//通常の関数コンポーネント
//tureの場合はFizzと表示し、それ以外の場合は何も表示しない。
type FizzProps = {
    isFizz:boolean
}


//isFizzの変化に関わらず、親が再描画されるとFizzも再描画される。
const Fizz = ( props:FizzProps ) => {
    const{ isFizz } = props
    console.log( 'Fizzが再描画されました,isFizz=${isFizz}')
    return <span>{ isFizz ? 'Fizz' : '' }</span>
}

type BuzzProps = {
    isBuzz:boolean
}


//Buzzはメモ化した関数コンポーネント
//isBuzzがtureの場合はBuzzと表示し、それ以外は何も表示しない。
//親コンポーネントが再描画されても、isBuzzが変化しない限りはBuzzは再描画しない。
const Buzz = memo<BuzzProps>( ( props ) ) => {
    const{ isBuzz } = props
    console.log( 'Buzzが再描画されました,izBuzz=${isBuzz}')
    return(
        <span>
            {isBuzz ? 'Buzz' : '' }
        </span>
    )
}