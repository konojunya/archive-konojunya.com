import test from "ava"
import React from "react"
import { shallow } from "enzyme"

import App from "../../src/javascripts/components/App.jsx"

const wrapper = shallow(<App/>)

// 要素はdiv
test("element is div", (t) => {
  t.is(wrapper.type(), "div")
})

// 子要素に2つのコンポーネントがあるか
test("child element length is 2", (t) => {
  t.is(wrapper.children().length,2)
})