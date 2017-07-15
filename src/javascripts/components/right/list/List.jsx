import React from "react"

import ListItem from "./ListItem.jsx"
import ListItemLink from "./ListItemLink.jsx"

export default class List extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="list">
        <h2>## {this.props.title}</h2>
        <ul>
          {this.props.label == "list" ? this._list() : this._listLink()}
        </ul>
      </div>
    )
  }

  _list = () => {
    return this.props.items.map( (text,i) => {
      return <ListItem text={text} key={i} />
    })
  }

  _listLink = () => {
    return this.props.items.map( (item,i) => {
      return <ListItemLink text={item.text} link={item.url} linkName={item.urlName} key={i} />
    })
  }

}