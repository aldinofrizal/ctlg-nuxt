<template>
  <div class="card rounded">
    <div class="image-wrapper">
      <img :src="img" :alt="title" class="rounded">
    </div>
    <div class="content">
      <div class="product-title">
        <p class="font-14">{{ title }}</p>
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
  data() {
    return {
      img: 'https://image.shutterstock.com/image-photo/copenhagen-denmark-may-4-2019-600w-1388126327.jpg',
      title: 'Air Force One Low',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      size: [42, 42.5, 43, 44],
      price: 400,
    }
  },
  computed: {
    trimedDescription() {
      return this.description.length > DESCRIPTION_MAX_LENGTH ? 
        `${this.description.substring(0, DESCRIPTION_MAX_LENGTH)}...` 
        : this.description.length
    },
    formattedPrice() {
      return `${this.price}IDR`
    }
  }
}
</script>

<style lang="scss">
.card {
  cursor: pointer;
  width: 200px;
  border: 1px solid #BFBFBF;
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