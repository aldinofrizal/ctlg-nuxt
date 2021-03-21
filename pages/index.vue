<template>
  <div class="products-wrapper">
    <Card v-for="(product, index) in products" :key="index" :item="product"/>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products
    }
  }
}
</script>

<style lang="scss">
.products-wrapper {
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
