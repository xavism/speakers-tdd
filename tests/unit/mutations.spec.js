import mutations from '@/store/mutations';
import initialState from '@/store/state';
import speaker from './fixtures/speaker';

describe('Mutations', () => {
  let state;

  beforeEach(() => {
    state = { ...initialState }
  });

  it('adds a new speaker', () => {
    // arrange
    const expectedSpeaker = {
      username: speaker.login,
      name: speaker.name,
      image: speaker.avatar_url
    }

    // act
    mutations.SET_SPEAKER(state, speaker)

    // assert
    expect(state.speakers.length).toBe(1);
    expect(state.speakers[0]).toEqual(expectedSpeaker)
  })

  it('does not allow repetitions', () => {
    // arrange
    const expectedSpeaker = {
      username: speaker.login,
      name: speaker.name,
      image: speaker.avatar_url
    }
    state.speakers = [expectedSpeaker]
    // act
    mutations.SET_SPEAKER(state, speaker)

    // assert
    expect(state.speakers.length).toBe(1);
  })
})
