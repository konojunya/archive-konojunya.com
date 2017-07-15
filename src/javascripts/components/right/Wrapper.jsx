import React from "react"

import Text from "./Text.jsx"
import List from "./list/List.jsx"

import baseData from "../../config"

export default class Wrapper extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div id="wrapper">
        <h1># README</h1>
        <Text title={baseData.name.title} text={baseData.name.text} />
        <Text title={baseData.about.title} text={baseData.about.text} />
        <List title={baseData.skill.title} items={baseData.skill.items} label={baseData.skill.label} />
        <List title={baseData.works.title} items={baseData.works.items} label={baseData.works.label} />
        <List title={baseData.hobby.title} items={baseData.hobby.items} label={baseData.hobby.label} />
        <Text title={baseData.likes.title} text={baseData.likes.text} />
        <List title={baseData.contact.title} items={baseData.contact.items} label={baseData.contact.label} />
      </div>
    )
  }

}