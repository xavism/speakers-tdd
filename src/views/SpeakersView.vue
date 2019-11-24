<template>
  <div>
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