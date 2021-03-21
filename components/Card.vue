<template>
  <div class="card rounded">
    <div class="image-wrapper">
      <img :src="item.image" :alt="item.name" class="rounded">
    </div>
    <div class="content">
      <div class="product-title">
        <p class="font-14">{{ item.name }}</p>
        <p class="bold">{{ formattedPrice }}</p>
      </div>
      <div class="product-desc font-12">
        {{ trimedDescription }}
      </div>
    </div>
  </div>
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
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  width: 200px;
  border: 1px solid #f2f2f2;
  transition: transform .2s;
  .image-wrapper img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .content {
    padding: 1rem;
    .product-desc {
      margin-top: .5rem;
      opacity: .6;
    }
  }

  &:hover {
    transform: scale(1.1)
  }
}
</style>