//列挙型

//名前のついた定数セットを定義できる。



//一般的な定数
const Direction = {
    'Up':0,
    'Down':1,
    'Left':2,
    'Right':3
}

//Enum
enum Direction2 {
    Up,
    Down,
    Left,
    Right
}

//enumを参照
let left : Direction2 = Direction.Left
console.log( left ) //2が出力



//文字ベースのenum
enum Direction3{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//APIのパラメータとして文字列が渡されたケースを想定
const value = 'Down'
const enumValue = value as Direction3

if( enumValue === Direction3.Down ){
    console.log( 'Down is selected' )
}
