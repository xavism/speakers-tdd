import speakerFixture from '../../tests/unit/fixtures/speaker'

export default {
  searchSpeaker: jest.fn().mockResolvedValue(speakerFixture),
};