import React from "react"

export default class Box extends React.Component {

  constructor(props){
    super(props)
  }

  render(){

    var size = window.innerWidth / 4

    var colors = ["red","blue","skyblue","yellow","red","blue","skyblue","yellow","red","blue","skyblue","yellow"]

    var color = colors[~~(Math.random()*colors.length)]

    var style = {
      box: {
        backgroundColor: color
      }
    }

    return(
      <div className="box" style={style.box}>
        <p>{this.props.title}</p>
      </div>
    )
  }

}