import React from "react"

import App from "./App.jsx"

export default class Base extends React.Component {

  render(){
    return(
      <html>
        <head>
        <link rel="stylesheet" href="style.css"/>
        </head>
        <body>
          <App/>
          <script src="bundle.js"/>
        </body>
      </html>
    )
  }

}