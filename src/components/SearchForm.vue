<template>
  <div class="columns">
    <div class="column">
      <b-field label="Username">
        <b-input v-model="inputData"></b-input>
      </b-field>
    </div>
    <div class="column">
      <b-button 
        type="is-primary"
        @click="fetchSpeaker(inputData)"
        outlined>
        Add
      </b-button>
    </div>
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

<style scoped>
  .columns {
    align-items: flex-end;
  }
</style>