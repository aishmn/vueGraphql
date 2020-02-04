<template>
  <div>
    <Navbar />
    <div>
      <h1 class="text-center blockquote bg-dark text-light p-2">
        Our Products
      </h1>

      <ul>
        <div v-if="$apollo.loading">Loding data</div>
        <li
          v-else
          class="list-group alert bg-primary mb-2 text-center"
          v-for="product in products"
          :key="product._id"
        >
          <b-img
            :src="product.image"
            :alt="product.title"
            height="200"
            width="200"
            fluid
            thumbnail
            center
          ></b-img>
          <strong class="text-light">Title - {{ product.title }}</strong>
          <em>Modelno - {{ product.modelNo }}</em>
          <p class="text-light">{{ product.category }}</p>
          <p>{{ product.features }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Navbar from "~/components/NavbarComponent";

import gql from "graphql-tag";
export default {
  created() {
    this.handleGetAllProducts();
  },
  computed: {
    products() {
      return this.$store.getters.products;
    }
  },
  components: {
    Logo,
    Navbar
  },

  methods: {
    handleGetAllProducts() {
      this.$store.dispatch("getProducts");
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
