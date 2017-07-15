import test from "ava"
import React from "react"
import { shallow } from "enzyme"

import Box from "../../../src/javascripts/components/box/Box.jsx"

const wrapper = shallow(<Box/>)

// 要素はdiv
test("element is div", (t) => {
  t.is(wrapper.type(), "div")
})

// 子要素はp
test("child element is p", (t) => {
  t.is(wrapper.childAt(0).type(), "p")
})

// .boxというクラス名
test("has a .box class name", (t) => {
  t.is(wrapper.props().className, "box")
})

// Titleという文字をコンポーネントに渡したらTitleと表示するか
test("text is Title", (t) => {
  const result = shallow(<Box title="Title" />)
  t.is(result.childAt(0).text(), "Title")
})