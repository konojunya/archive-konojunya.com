import React from "react"

import App from "./App.jsx"

export default class Base extends React.Component {

  render(){
    return(
      <html>
        <head>
          <meta name="description" content="大阪でフロントエンドエンジニアとして活動しているHAL大阪の学生です！基本的にはJSでコソコソしています。" />
          <meta name="keyword" content="konojunya,konojunya.com,engineer,osaka,hal,website,javascript" />
          <meta property="og:title" content="konojunya.com/README.md" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.konojunya.com" />
          <meta property="og:image" content="https://s3-us-west-2.amazonaws.com/konojunya.com/ogp-image.png" />
          <meta property="og:site_name" content="konojunya.com/README.md" />
          <meta property="og:description" content="大阪でフロントエンドエンジニアとして活動しているHAL大阪の学生です！基本的にはJSでコソコソしています。" />
          <meta property="fb:app_id" content="100007518556907" />
          <meta name="twitter:card" content="summarylargeimage" />
          <meta name="twitter:site" content="@konojunya" />
          <meta name="twitter:player" content="@konojunya" />
          <meta property="og:email" content="junya.developer@gmail.com" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="style.css"/>
          <script src="analytics.js" />
          <title>konojunya.com/README.md</title>
        </head>
        <body>
          <App/>
        </body>
      </html>
    )
  }

}
