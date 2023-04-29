//見た目を実装するコンポーネントの設計思想

type ButtonProps = {
   label:string
   text:string
   disabled:boolean
   onClick:React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ( props: ButtonProps ) => {
   const { label , text , disabled , onClick } = props

   return (
      <div>
         ページ情報
      </div>
   )
}

