import { mount } from '@vue/test-utils'
import Example from '@/components/Example.vue'

describe('Example', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Example)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
