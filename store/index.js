export const state = () => ({
  products: []
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  }
}

export const actions = {
  async getProducts ({ commit }) {
    const data = await this.$axios.$get('/products')
    commit('SET_PRODUCTS', data)
  }
}