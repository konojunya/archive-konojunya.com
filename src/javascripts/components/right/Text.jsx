import React from "react"

export default class Text extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="text">
        <h2>## {this.props.title}</h2>
        <p dangerouslySetInnerHTML={{__html: this.props.text}}></p>
      </div>
    )
  }

}