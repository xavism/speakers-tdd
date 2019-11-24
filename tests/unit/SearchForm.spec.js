import { shallowMount } from '@vue/test-utils'
import SearchForm from '@/components/SearchForm'

describe('SearchForm', () => {
  
  const build = () => {
    const wrapper = shallowMount(SearchForm)

    return {
      wrapper,
      input: () => wrapper.find('input'),
      button: () => wrapper.find('button')
    }
  }

  it('it renders the component', () => {
    // arrange
    const { wrapper } = build()
    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('it renders the right', () => {
    // arrange
    const { input, button } = build()
    // assert
    expect(input().exists()).toBe(true)
    expect(button().exists()).toBe(true)
  })
})
