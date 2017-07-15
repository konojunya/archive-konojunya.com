import React from "react"

import Box from "./Box.jsx"
import boxConfig from "../../../../config/box"

export default class Boxes extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="boxes">
        {
          boxConfig.map( (item,i) => {
            return <Box title={item.title} key={i} />
          })
        }
      </div>
    )
  }

}