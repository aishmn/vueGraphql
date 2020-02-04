<template>
  <b-container>
    <b-row align-v="center">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </b-row>
  </b-container>
</template>

<script>
import ProductCard from "~/components/ProductCardComponent.vue";
export default {
  data() {
    return {
      loadedProducts: []
    };
  },
  components: {
    ProductCard
  }
};
</script>

<style></style>
