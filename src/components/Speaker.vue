<template>
  <div class="speaker-wrapper">
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

<style scoped>
img {
  width: 150px;
  border-radius: 50%;
}

h2 {
  font-size: x-large;
  font-weight: 600;
} 

.speaker-wrapper {
  text-align: center
}
</style>