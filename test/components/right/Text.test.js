import test from "ava"
import React from "react"
import { shallow } from "enzyme"

import Text from "../../../src/javascripts/components/right/Text.jsx"

const wrapper = shallow(<Text title={"title"} text={"hello<br>world"} />);

/// 要素がdiv
test("element type is div", t => {
  t.is(wrapper.type(), "div")
})

// クラス名がtext
test("has a .text class name", t => {
  t.true(wrapper.hasClass("text"))
})

// 子要素の0がh2
test("child element type is h2", t => {
  t.is(wrapper.childAt(0).type(), "h2")
})

// 子要素のテキストが ## title
test("child element text is ## title", t => {
  t.is(wrapper.childAt(0).text(), "## title")
})

// 子要素の1がpタグ
test("child element type is p", t => {
  t.is(wrapper.childAt(1).type(), "p")
})

// 子要素のhtmlがhello<br>world
test("child element text is hello<br>world", t => {
  t.is(wrapper.childAt(1).html(), "<p>hello<br>world</p>")
})