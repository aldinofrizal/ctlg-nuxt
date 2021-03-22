<template>
  <div>
    <p class="font-12 bold">{{ author }}</p>
    <p class="font-12">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    text: String
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-top: .5rem
}
div {
  padding-bottom: 1rem;
  margin-bottom: .5rem;
  border-bottom: .5px solid #f2f2f2
}
</style>