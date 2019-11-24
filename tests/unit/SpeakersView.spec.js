import { shallowMount, createLocalVue } from '@vue/test-utils'
import SpeakersView from '@/views/SpeakersView'
import SearchForm from '@/components/SearchForm'
import SpeakersList from '@/components/SpeakersList'
import Vuex from 'vuex'

// Creating a localVue instance to be able to use vuex
const localVue = createLocalVue()
// Adding Vuex to our new local Vue instance
localVue.use(Vuex)

let speaker = {
  name: 'My Name'
}

describe('SpeakersView', () => {
  // Creating global variables to access through the tests
  let store, getters
  // Executes beforeEach Test
  beforeEach(() => {
    // It creates a store with the desired getters
    getters = {
      speakers: () => [speaker, speaker]
    }
    store = new Vuex.Store({
      getters
    })
  })
  
  const build = () => {
    const wrapper = shallowMount(SpeakersView, {
      // Passing the created store and the vue instance when mounting the component
      store,
      localVue
    })


    return {
      wrapper,
      SearchForm: () => wrapper.find(SearchForm),
      SpeakersList: () => wrapper.find(SpeakersList)
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
    const { SearchForm, SpeakersList } = build()

    // assert
    expect(SearchForm().exists()).toBe(true)
    expect(SpeakersList().exists()).toBe(true)
  })

  it('it passes speakers to the speakersList', () => {
    // arrange
    const { SpeakersList } = build()

    // assert
    expect(SpeakersList().vm.speakers).toEqual([speaker, speaker])
    // or
    expect(SpeakersList().vm.speakers).toBe(store.getters.speakers)
    // toBe expects === rather than toEqual that expects ==
  })
})
