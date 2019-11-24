  <template>
  <div>
    <input type="text" v-model="inputData">
    <button @click="fetchSpeaker(inputData) "></button>
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
    ...mapActions({
      fetchSpeaker: 'FETCH_SPEAKER'
    })
  }
}
</script>

<style>

</style>