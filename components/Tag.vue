<template>
  <div class="rounded">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
div {
  background-color: #e8e5e5;
  padding: .5rem;
  margin-right: 1rem;
}
</style>