import express from "express"
import React from "react"
import ReactDOMServer from "react-dom/server"

import App from "./src/javascripts/components/App"

const app = express()

app.use(express.static("build"))

app.get("/", (req,res) => {
  res.send(
    ReactDOMServer.renderToString(
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
  )
})

app.listen(8080,()=>{
  console.log("listen http://localhost:8080")
})