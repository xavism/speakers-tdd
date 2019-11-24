import { shallowMount } from '@vue/test-utils'
import SpeakersView from '@/views/SpeakersView'
import SearchForm from '@/components/SearchForm'
import SpeakersList from '@/components/SpeakersList'


describe('SpeakersView', () => {
  const build = () => {
    const wrapper = shallowMount(SpeakersView)

    return {
      wrapper,
      SearchForm: () => wrapper.find(SearchForm),
      SpeakersList: () => wrapper.find(SpeakersList)
    }
  }

  it('it renders the component', () => {
    // arrange
    const wrapper = shallowMount(SpeakersView)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('it renders the right', () => {
    // arrange
    const { SearchForm, SpeakersList } = build()

    // assert
    expect(SearchForm().exists()).toBe(true)
    expect(SpeakersList().exists()).toBe(true)
  })
})
