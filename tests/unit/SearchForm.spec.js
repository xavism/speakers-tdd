import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchForm from '@/components/SearchForm'
import Vuex from 'vuex'
import Buefy from 'buefy'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('SearchForm', () => {
  let store, actions

  beforeEach(() => {
    // It creates a store with the desired getters
    actions = {
      FETCH_SPEAKER: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  const build = () => {
    const wrapper = shallowMount(SearchForm, {
      store,
      localVue
    })

    return {
      wrapper,
      input: () => wrapper.find('input'),
      button: () => wrapper.find('button')
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
    const { input, button } = build()
    // assert
    expect(input().exists()).toBe(true)
    expect(button().exists()).toBe(true)
  })

  it('binds the input data', () => {
    // arrange
    const { wrapper, input } = build()
    // Set local data to Speaker
    wrapper.setData({
      inputData: 'Speaker'
    })
    // assert
    expect(input().element.value).toBe('Speaker')
  })

  it('dispatches FETCH_SPEAKER when clicking the button with the correct parameters', () => {
    // arrange
    const { wrapper, button } = build()
    // Set local data to Speaker
    wrapper.setData({
      inputData: 'Speaker'
    })
    // assert
    button().trigger('click')
    expect(actions.FETCH_SPEAKER).toHaveBeenCalled()
    // Exists a jest method for the expect assert called '.toHaveBeenCalledWith', but an action has more parameter than just the passed in the view
    expect(actions.FETCH_SPEAKER.mock.calls[0][1]).toEqual("Speaker")
  })
})
