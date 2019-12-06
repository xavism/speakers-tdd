export default {
  SET_SPEAKER(state, speaker) {
    if (!state.speakers.find(s => s.username === speaker.login)) {
      state.speakers.push({
        username: speaker.login,
        name: speaker.name,
        image: speaker.avatar_url
      });
    }
  },
}