<template>
  <div class="container">
    <SearchForm/>
    <SpeakersList :speakers="speakers"/>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import SpeakersList from '@/components/SpeakersList'
import { mapGetters } from 'vuex'

export default {
  name: 'SpeakersView',
  components: {
    SearchForm,
    SpeakersList
  },
  computed: {
    ...mapGetters({speakers: 'speakers'})
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>