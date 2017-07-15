import test from "ava"
import React from "react"
import { shallow } from "enzyme"

import App from "../../src/javascripts/components/App.jsx"

import Title from "../../src/javascripts/components/title/Title.jsx"
import Boxes from "../../src/javascripts/components/box/Boxes.jsx"

const wrapper = shallow(<App/>)

// 要素はdiv
test("element is div", (t) => {
  t.is(wrapper.type(), "div")
})

// 子要素は2つレンダリングされているか
test("child element is 2 components", (t) => {
  t.is(wrapper.children().length,2)
})

// Titleコンポーネントはレンダリングされているか
test("<Title/> component should be rendered", (t) => {
  t.true(wrapper.contains(<Title/>))
})

// Boxesコンポーネントはレンダリングされているか
test("<Boxes/> component should be rendered", (t) => {
  t.true(wrapper.contains(<Boxes/>))
})