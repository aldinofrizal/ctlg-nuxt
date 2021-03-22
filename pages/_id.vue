<template>
  <div class="page-wrapper">
    <div class="detail_wrapper d-flex flex-row">
      <div class="images-wrapper d-flex flex-column">
        <div class="main-image">
          <img :src="activeImage" :alt="detail.name">
        </div>
        <div class="images-list d-flex justify-content-between flex-wrap">
          <img v-for="(image,index) in images" :src="image" :alt="detail.name" :key="index" @click="changeMainImage(index)"/>
        </div>
      </div>
      <div class="content-wrapper">
        <p class="font-16 bold">{{ detail.name }}</p>
        <p class="font-14 brand">{{ detail.brand }}</p>
        <p class="font-20 bold">{{ formattedPrice }}</p>
        <p class="font-14">{{ detail.description }}</p>

        <div class="available-sizes">
          <p class="font-14 bold">Available sizes</p>
          <div class="d-flex flex-row flex-wrap">
            <Tag v-for="(size,index) in detail.size" :key="index" :text="String(size)"/>
          </div>
        </div>

        <div class="comment-wrapper">
          <p class="font-14 bold">Reviews</p>
          <Comment v-for="(comment, index) in limitedComments" :key="index" :author="comment.name" :text="comment.body" />          
          <p @click="expandComments = !expandComments" class="font-12 bold pointer text-center">{{ expandCommentText }}</p>
        </div>
      </div>
    </div>
    <div class="products-wrapper">
      <p class="font-14 bold text-center">People also see</p>
      <transition-group name="list" class="d-flex justify-content-around scroll-horizontal">
        <Card v-for="product in otherProducts" :key="product.id" :item="product"/>
      </transition-group>
    </div>
  </div>
</template>

<script>
const DEFAULT_VIEW_COMMENTS = 4
export default {
  async mounted() {
    await this.fetchDetail()
    await this.fetchFakeComments()
  },
  data() {
    return {
      comments: [],
      detail: {},
      activeImageIndex: 0,
      expandComments: false
    }
  },
  computed: {
    otherProducts() {
      let productToShow = []
      let products = this.$store.state.products

      while (productToShow.length < 5) {
        let tempIndex = Math.floor(Math.random() * products.length)
        if (Math.round(Math.random())) {
          productToShow.push(products[tempIndex])
        }
      }

      return productToShow
    },
    images() {
      if(this.detail.image && this.detail.images.length) {
        return [this.detail.image, ...this.detail.images]
      } else {
        return []
      }
    },
    activeImage() {
      return this.images[this.activeImageIndex]
    },
    formattedPrice() {
      return `${this.detail.price} IDR`
    },
    expandCommentText() {
      return this.expandComments ? '--- See less ---' : '--- See more ----'
    },
    limitedComments() {
      if(this.expandComments){
        return this.comments
      } else {
        return this.comments.slice(0, DEFAULT_VIEW_COMMENTS)
      }
    }
  },
  methods: {
    async fetchDetail() {
      const data = await this.$axios.$get(`/products/${this.$route.params.id}`)
      this.detail = data
    },
    async fetchFakeComments() {
      const { data } = await this.$axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
      this.comments = data
    },
    changeMainImage(index) {
      this.activeImageIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/detail.scss';
.list-enter-active, .list-leave-active {
  transition: all 2s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
</style>