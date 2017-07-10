import React from "react"

import Title from "./title/Title.jsx"
import Boxes from "./box/Boxes.jsx"

export default class App extends React.Component {

  render(){
    return(
      <div>
        <Title/>
        <Boxes/>
      </div>
    )
  }

}