import { shallowMount } from '@vue/test-utils'
import ActiveFilters from '@/components/ActiveFilters.vue'

describe('ActiveFilters.vue', () => {
  it('exists', () => {
    const wrapper = shallowMount(ActiveFilters)
    expect(wrapper.exists()).toBeTruthy()
  })
})
