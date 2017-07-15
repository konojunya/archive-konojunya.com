import test from "ava"
import React from "react"
import { shallow } from "enzyme"

import Title from "../../../src/javascripts/components/title/Title.jsx"

const wrapper = shallow(<Title/>)

// 要素はh1
test("element is h1", (t) => {
  t.is(wrapper.type(), "h1")
})

// テキストとして KONOJUNYA's PORTFOLIO
test("text is \"KONOJUNYA'sPORTFOLIO\"", (t) => {
  t.is(wrapper.text(), "KONOJUNYA'sPORTFOLIO")
})

test("html is \"<h1>KONO<br/>JUNYA's<br/>PORTFOLIO\"</h1>", (t) => {
  t.is(wrapper.html(), "<h1>KONO<br/>JUNYA&#x27;s<br/>PORTFOLIO</h1>")
})