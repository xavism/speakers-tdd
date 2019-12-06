import api from '@/api'

export default {
  FETCH_SPEAKER({ commit }, username) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await api.searchSpeaker(username)
        commit('SET_SPEAKER', user);
        resolve(user)
      } catch (error) {
        reject(error)
      }
    });
  },
};