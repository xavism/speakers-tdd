import { shallowMount } from '@vue/test-utils'
import SpeakersView from '@/views/SpeakersView'
import SearchForm from '@/components/SearchForm'
import SpeakersList from '@/components/SpeakersList'


describe('SpeakersView', () => {
  it('it renders the component', () => {
    // arrange
    const wrapper = shallowMount(SpeakersView)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('it renders the right', () => {
    // arrange
    const wrapper = shallowMount(SpeakersView)
    const searchForm = wrapper.find(SearchForm)
    const speakersList = wrapper.find(SpeakersList)

    // assert
    expect(searchForm.exists()).toBe(true)
    expect(speakersList.exists()).toBe(true)
  })
})
