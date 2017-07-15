import test from "ava"
import React from "react"
import { shallow } from "enzyme"

import Boxes from "../../../src/javascripts/components/box/Boxes.jsx"
import Box from "../../../src//javascripts/components/box/Box.jsx"

const wrapper = shallow(<Boxes/>)

// 要素はdiv
test("element is div", (t) => {
  t.is(wrapper.type(), "div")
})

// 子要素は8つレンダリングされているか
test("child element is 8", (t) => {
  t.is(wrapper.children().length, 8)
})

// .boxesというクラス名
test("has a .boxes class name", (t) => {
  t.is(wrapper.props().className, "boxes")
})