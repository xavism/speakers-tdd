<template>
  <div class="columns">
    <div class="column" v-for="speaker in speakers" :key="speaker.username">
      <Speaker :speaker="speaker"/>
    </div>
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