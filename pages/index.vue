<template>
  <div class="page-wrapper">
    <transition-group name="list" class="d-flex flex-wrap justify-content-around">
      <Card v-for="product in products" :key="product.id" :item="product"/>
    </transition-group>
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
.list-enter-active, .list-leave-active {
  transition: all 2s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
</style>
