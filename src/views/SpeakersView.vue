<template>
  <div>
    <SearchForm/>
    <SpeakersList/>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import SpeakersList from '@/components/SpeakersList'

export default {
  name: 'SpeakersView',
  components: {
    SearchForm,
    SpeakersList
  }
}
</script>