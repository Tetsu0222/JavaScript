//styledComponentsはCSSinJSと呼ばれるライブラリの1つ
//JS内にCSSを効率的に記述するためのもの。

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler:{
    //styledComponentsの有効化
    styledComponents:true,
  },
}

module.exports = nextConfig
