import React from "react"

import Box from "./Box.jsx"

export default class Boxes extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      items: ["About","GIOGIO","HOGE","FOO","About","GIOGIO","HOGE","FOO"]
    }
  }

  render(){

    var render = this.state.items.map( (title,i) =>{
      return <Box title={title} key={i}/>
    })

    return(
      <div className="boxes">
        {render}
      </div>
    )
  }

}