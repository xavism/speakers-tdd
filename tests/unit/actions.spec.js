import flushPromises from 'flush-promises';
import actions from '@/store/actions';
import api from '@/api';
import speakerFixture from './fixtures/speaker';

// NEW: Manual mocking all api calls
jest.mock('@/api');

describe('Store actions', () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  it('fetches speaker', async () => {
    // arrange
    const expectedSpeaker = 'xavism';

    // act
    await actions.FETCH_SPEAKER({ commit }, expectedSpeaker);
    await flushPromises();
    // assert
    expect(api.searchSpeaker).toHaveBeenCalledWith(expectedSpeaker);
    expect(commit).toHaveBeenCalledWith('SET_SPEAKER', speakerFixture);
  });
});