<template>
    <div class="row row-cols-3 g-3 my-3">
      <div class="col" v-for="product in sortProducts" :key="product.id">
        <card-component :product="product"></card-component>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import productsStore from "@/stores/productsStore";
import cartStore from "@/stores/cartStore";
import cardComponent from "./cardComponent.vue";

export default {
  computed: {
    ...mapState(productsStore, ['sortProducts']),
  },
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  },
  components: {
    cardComponent
  }
}
</script>