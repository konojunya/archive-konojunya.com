import React from "react"

export default class Box extends React.Component {

  constructor(props){
    super(props)
  }

  render(){

    return(
      <div className="box">
        <p>{this.props.title}</p>
      </div>
    )
  }

}