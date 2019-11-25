<template>
  <div>
    <img :src="speaker.image">
    <h2>{{speaker.username}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    speaker: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>