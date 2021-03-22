<template>
  <NuxtLink :to="`/${item.id}`">
    <div class="card rounded my-2">
      <div class="image-wrapper">
        <img :src="item.image" :alt="item.name" class="rounded">
      </div>
      <div class="content p-2">
        <div class="product-title">
          <p class="font-14 pb-1">{{ item.name }}</p>
          <p class="bold">{{ formattedPrice }}</p>
        </div>
        <div class="product-desc font-12 mt-1">
          {{ trimedDescription }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
const DESCRIPTION_MAX_LENGTH = 50
export default {
  props: {
    item: Object
  },
  computed: {
    trimedDescription() {
      return this.item.description.length > DESCRIPTION_MAX_LENGTH ?
        `${this.item.description.substring(0, DESCRIPTION_MAX_LENGTH)}...`
        : this.item.description.length
    },
    formattedPrice() {
      return `${this.item.price} IDR`
    }
  }
}
</script>

<style lang="scss">
.card {
  cursor: pointer;
  width: 200px;
  border: 1px solid #f2f2f2;
  transition: transform .2s;
  color: black !important;
  .image-wrapper img {
    width: 100%;
    height: 200px;
  }
  .content {
    background-color: white;
    .product-desc {
      opacity: .6;
    }
  }

  &:hover {
    transform: scale(1.1)
  }
}
</style>