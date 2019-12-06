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
    const expectedSpeaker = speaker

    // act
    mutations.SET_SPEAKER(state, expectedSpeaker)

    // assert
    expect(state.speakers.length).toBe(1);
    expect(state.speakers[0]).toEqual(expectedSpeaker)
  })
})