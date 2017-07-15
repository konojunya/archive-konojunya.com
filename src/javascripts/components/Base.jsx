import React from "react"

import App from "./App.jsx"

export default class Base extends React.Component {

  render(){
    return(
      <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="style.css"/>
        <title>konojunya.com/README.md</title>
        </head>
        <body>
          <App/>
        </body>
      </html>
    )
  }

}