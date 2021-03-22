<template>
  <div class="app-wrapper mx-auto p-4">
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
    this.$store.dispatch('getProducts')
    if (!this.$store.state.products.length) {
    }
  }
}
</script>

<style lang="scss">
.app-wrapper {
  max-width: 1200px;

  .page-content {
    min-height: 85vh;
  }
}
</style>
