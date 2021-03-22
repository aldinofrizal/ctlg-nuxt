<template>
  <p>{{ JSON.stringify(detail, null, 2) }}</p>
</template>

<script>
export default {
  mounted() {
    this.fetchDetail()
  },
  data() {
    return {
      detail: {}
    }
  },
  methods: {
    async fetchDetail() {
      const data = await this.$axios.$get(`/products/${this.$route.params.id}`)
      this.detail = data
    }
  }
}
</script>

<style>

</style>