<template>
  <div class="page-wrapper">
    <div v-if="detail.id" class="detail-wrapper d-flex flex-row pb-6">
      <div class="images-wrapper d-flex flex-column mb-5">
        <div class="main-image mb-4">
          <img :src="activeImage" :alt="detail.name"/>
        </div>
        <div class="images-list d-flex justify-content-between flex-wrap">
          <img 
            v-for="(image,index) in images"
            :src="image"
            :alt="detail.name"
            :key="index"
            @click="changeMainImage(index)"
            class="pointer mb-2"
          />
        </div>
      </div>
      <div class="content-wrapper pr-4 pl-6">
        <p class="font-16 bold">{{ detail.name }}</p>
        <p class="mb-3 mt-1 font-14 brand mt-1">{{ detail.brand }}</p>
        <p class="my-3 font-20 bold">{{ formattedPrice }}</p>
        <p class="my-3 font-14">{{ detail.description }}</p>

        <div class="available-sizes mb-6">
          <p class="my-3 font-14 bold">Available sizes</p>
          <div class="d-flex flex-row flex-wrap">
            <Tag v-for="(size,index) in detail.size" :key="index" :text="String(size)"/>
          </div>
        </div>
        <div class="comment-wrapper mt-6">
          <p class="font-14 bold my-3">Reviews</p>
          <Comment 
            v-for="(comment, index) in limitedComments"
            :key="index"
            :author="comment.name"
            :text="comment.body"
          />          
          <p 
            @click="expandComments = !expandComments" 
            class="font-12 bold pointer text-center"
          >
            {{ expandCommentText }}
          </p>
        </div>
      </div>
    </div>
    <div v-else class="d-flex flex-row justify-content-center page-load-spinner-wrapper align-items-center">
      <Spinner />
    </div>
    <div class="products-wrapper mt-5" v-if="detail.id && otherProducts.length">
      <p class="font-14 bold text-center">People also see</p>
      <transition-group name="list" class="d-flex justify-content-between scroll-horizontal mt-5 p-2">
        <Card 
          v-for="(product,index) in otherProducts"
          :key="index" 
          :item="product" 
          class="mr-2"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
const DEFAULT_VIEW_COMMENTS = 4
export default {
  components: { Spinner },
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
    otherProducts() { // dummy products to show
      return this.$store.state.products.slice(0, 5)
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