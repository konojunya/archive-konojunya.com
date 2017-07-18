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
        <img src="https://circleci.com/gh/konojunya/konojunya.com/tree/master.svg?style=shield&circle-token=23da787516c0584c1519768c1c36e804c06bb72e" alt="circleci badge" />
        <img src="https://img.shields.io/badge/coverage-68%25-yellow.svg" alt="coverage badge" />
        <img src="https://img.shields.io/badge/node-v8.1.4-brightgreen.svg" alt="node version badge" />
        <img src="https://img.shields.io/badge/npm-v5.3.0-blue.svg" alt="npm version badge" />
        <img src="https://img.shields.io/badge/platform-web-lightgray.svg" alt="platform badge" />
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