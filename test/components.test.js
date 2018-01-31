import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

let nuxt = null

test.before('Init Nuxt.js', async (t) => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try {
    config = require(resolve(rootDir, 'nuxt.config.js'))
  } catch (e) {}

  config.rootDir = rootDir
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  await nuxt.listen(4000, 'localhost')
})

test('Route / exits and render HTML with CSS applied', async t => {
  const window = await nuxt.renderAndGetWindow('http://localhost:4000/')
  const element = window.document.querySelector('#logoImage img')
  t.not(element, null)
  t.is(element.src, 'https://s3-us-west-2.amazonaws.com/konojunya.com/pigg.png')
  t.not(element.alt, null)
  t.is(element.alt, "page image")
})

test.after('Closing server and nuxt.js', (t) => {
  nuxt.close()
})
