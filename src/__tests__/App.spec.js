import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('mounts properly', () => {
  const wrapper = mount(App, {
    global: {
      stubs: ['router-view'] 
    }
  })
  expect(wrapper.exists()).toBe(true) 
})
})
