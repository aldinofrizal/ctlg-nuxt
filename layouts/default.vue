<template>
  <div class="app-wrapper mx-auto">
    <Logo />
    <div class="page-content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    if (!this.$store.state.products.length) {
      this.$store.dispatch('getProducts')
    }
  }
}
</script>

<style lang="scss">
.app-wrapper {
  max-width: 1200px;
  padding: 2rem;

  .page-content {
    min-height: 85vh;
  }
}
</style>
