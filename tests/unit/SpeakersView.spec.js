import { shallowMount } from '@vue/test-utils'
import SpeakersView from '@/views/SpeakersView'
import SearchForm from '@/components/SearchForm'
import SpeakersList from '@/components/SpeakersList'

let speaker = {
  name: 'My Name'
}
describe('SpeakersView', () => {
  const build = () => {
    const wrapper = shallowMount(SpeakersView, {
      computed: {
        speakers: () => [speaker, speaker]
      }
    })

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

  it('it passes speakers to the speakersList', () => {
    // arrange
    const { wrapper, SpeakersList } = build()
    // assert
    expect(SpeakersList().vm.speakers).toEqual([speaker, speaker])
    // or
    expect(SpeakersList().vm.speakers).toBe(store.getters.speakers)
    // toBe expects === rather than toEqual that expects ==
  })
})
