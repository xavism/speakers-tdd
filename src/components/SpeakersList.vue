<template>
  <div>
    <Speaker v-for="speaker in speakers" :key="speaker.username"/>
  </div>
</template>

<script>
import Speaker from '@/components/Speaker'
export default {
  components: {
    Speaker
  },
  props: {
    speakers: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>