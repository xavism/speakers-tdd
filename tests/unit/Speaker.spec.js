import { shallowMount } from '@vue/test-utils'
import Speaker from '@/components/Speaker'

describe('Speaker', () => {
  let props
  let speaker = {
    username: '@myname',
    name: 'My Name',
    image:'https://myimage.com'
  }
  beforeEach(() => {
    props = {
      speaker
    }
  })

  const build = () => {
    const wrapper = shallowMount(Speaker, {
      // Add props while mounting
      propsData: props
    })

    return {
      wrapper
    }
  }

  it('renders the component', () => {
    // arrange
    const { wrapper } = build()
    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the right', () => {
    // arrange
    const { wrapper } = build()
    // assert
    expect(wrapper.text()).toContain(speaker.username)
    expect(wrapper.find('img').attributes('src')).toBe(speaker.image)
  })
})
