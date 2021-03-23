<template>
  <div>
    <p class="font-16 bold">{{ name }}</p>
    <p class="mb-3 mt-1 font-14 brand mt-1">{{ brand }}</p>
    <p class="my-3 font-20 bold">{{ price }}</p>
    <p class="my-3 font-14">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    brand: String,
    price: String,
    description: String,
  }
}
</script>