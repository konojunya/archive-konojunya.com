import test from "ava"
import React from "react"
import { shallow } from "enzyme"

import LogoImage from "../../../src/javascripts/components/left/LogoImage.jsx"

const wrapper = shallow(<LogoImage/>)

// 要素はdiv
test("element is div", (t)=> {
  t.is(wrapper.type(), "div")
})

// idがlogoImage
test("has a #logoImage id name", (t) => {
  t.is(wrapper.props().id, "logoImage")
})

// 子要素がimg
test("child element is img", (t) => {
  t.is(wrapper.childAt(0).type(), "img")
})

// 子要素のsrcが /pigg.png
test("src of child element is /pigg.png", t => {
  t.is(wrapper.childAt(0).props().src, "https://s3-us-west-2.amazonaws.com/konojunya.com/pigg.png")
})

// 子要素のaltが page image
test("alt of child element is page image", t => {
  t.is(wrapper.childAt(0).props().alt, "page image")
})
