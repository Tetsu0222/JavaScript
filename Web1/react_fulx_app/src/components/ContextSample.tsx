import React from 'react'

//Titleを渡すためのコンテキストを生成
const TitleContext = React.createContext('')

//Consumerはコンテキストでデータを受け取る役割を持つ。
//Titleコンポーネントの中でコンテキストの値を参照する。
const Title = () => {
    return(
        <TitleContext.Consumer>
            {(title) => {
                return<h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

//ヘッダーからTitleには何もデータを渡さない。
const Header = () => {

    return(
        <div>
            <Title />
        </div>
    )
}


//Providerはコンテキストの値を渡す役割を担う。
//Pageコーポネントの中でコンテキストに値を渡す。
const Page = () => {
    const title = 'React Book'

    return(
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )

}


export default Page