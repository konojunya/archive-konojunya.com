import test from "ava"
import React from "react"
import { shallow } from "enzyme"

import Wrapper from "../../../src/javascripts/components/right/Wrapper.jsx"

const wrapper = shallow(<Wrapper/>)

// 要素がdiv
test("element is div", t => {
  t.is(wrapper.type(), "div")
})

// id is wrapper
test("has a #wrapper id name", t => {
  t.is(wrapper.props().id, "wrapper")
})

// 子要素(0)がh1
test("child element type is h1", t => {
  t.is(wrapper.childAt(0).type(), "h1")
})

// 子要素(0)のテキストが# README
test("child element text is # README", t => {
  t.is(wrapper.childAt(0).text(), "# README")
})

// 子要素が8つレンダリングされているか
test("rendered element length is 8", t => {
  t.is(wrapper.children().length, 8)
})