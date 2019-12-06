  <template>
  <div>
    <input type="text" v-model="inputData">
    <button @click="fetchSpeaker(inputData) ">Add Speaker</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      inputData: ''
    }
  },
  methods: {
    // fetchSpeaker(username) {
    //   console.log(username)
    //   this.$store.dispatch('FETCH_SPEAKER', {username})
    // }
    ...mapActions({
      fetchSpeaker: 'FETCH_SPEAKER'
    })
  }
}
</script>

<style>

</style>