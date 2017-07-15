import React from "react"

import LogoImage from "./left/LogoImage.jsx"
import Wrapper from "./right/Wrapper.jsx"

export default class App extends React.Component {

  render(){
    return(
      <div id="app">
        <LogoImage/>
        <Wrapper/>
      </div>
    )
  }

}