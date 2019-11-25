import { shallowMount } from '@vue/test-utils'
import SpeakersView from '@/views/SpeakersView'

describe('SpeakersView', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(SpeakersView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
