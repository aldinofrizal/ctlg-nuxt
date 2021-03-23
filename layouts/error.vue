<template>
  <div class="d-flex flex-column justify-content-center h-75 align-items-center">
    <img src="~/assets/image/error-illustration.svg.svg" alt="error illustration" height="200px">
    <h1 class="mt-5 mb-1">{{ error.statusCode }}</h1>
    <p class="font-16 bold mb-3">{{ errorMessages }}</p>
    <NuxtLink to="/">Go back to Home</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blank',
  computed: {
    errorMessages() {
      if(this.error.statusCode == 404) {
        return 'Oops sorry we couldnt find that page'
      } else {
        return 'Ooops sorry something went wrong'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 72px;
}
</style>>
