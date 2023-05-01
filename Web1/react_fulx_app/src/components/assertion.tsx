//型アサーション
//変数 = 値 as 型
//具体的な型を知ることができない（型推論できない）ケースもあり、その時に使用される機能

const myCanvas = document.getElementById( 'main_canvas' )
//console.log( myCanvas.width ) documentの値は型推論できないためエラーが発生する。

//アサーション機能を使って具体的な型を指定できる。
const myCanvas2 = document.getElementById( 'main_canvas' ) as HTMLCanvasElement
console.log( myCanvas2.width )


//型アサーションが認められるのは、対象となる型に対して具体的になる型か、より汎用的な型に変換するケースのみ。
//複雑なアサーションが必要な場合は、まずはany型に変換し、次に目的の型に変換する2段階アサーションで実現できる。
const result = ( response as any ) as User