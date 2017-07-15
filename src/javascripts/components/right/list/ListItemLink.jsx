import React from "react"

export default class ListItemLink extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <li className="listItemLink">{this.props.text}: [{this.props.linkName}](<a href={this.props.link} target="_blank">{this.props.link}</a>)</li>
    )
  }

}