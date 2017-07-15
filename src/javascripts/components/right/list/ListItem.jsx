import React from "react"

export default class ListItem extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <li className="listItem">{this.props.text}</li>
    )
  }

}