<template>
  <transition-group name="list" class="products-wrapper">
    <Card v-for="product in products" :key="product.id" :item="product"/>
  </transition-group>
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
.list-enter-active, .list-leave-active {
  transition: all 2s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
</style>
