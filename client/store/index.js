import allProducts from "~/apollo/queries/allProducts";

export const state = () => ({
  products: []
});

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  }
};

export const actions = {
  getProducts({ commit }) {
    const client = this.app.apolloProvider.defaultClient;
    client
      .query({
        query: allProducts
      })
      .then(data => {
        commit("setProducts", data.data.getProducts);
      })
      .catch(error => {
        console.error(error);
      });
  }
};

export const getters = {
  products: state => state.products
};
