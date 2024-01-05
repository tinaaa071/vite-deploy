<template>
    <nav class="navbar bg-light">
        <div class="container-fluid">
        <span class="navbar-brand" href="#">香香餅乾店</span>
        <button type="button" class="btn nav-link">
            購物車
            <span class="badge rounded-pill bg-danger text-white">{{ cart.length }}</span>
        </button>
        </div>
    </nav>
</template>

<script>
// const { mapState } = Pinia
import { mapState } from "pinia";
import cartStore from "../stores/cartStore"

export default {
  template: `<nav class="navbar bg-light">
      <div class="container-fluid">
      <span class="navbar-brand" href="#">香香麵攤</span>
      <button type="button" class="btn nav-link">
        購物車
        <span class="badge rounded-pill bg-danger text-white">{{ cart.length }}</span>
      </button>
    </div>
  </nav>`,
  computed: {
    ...mapState(cartStore, ['cart'])
  }
}
</script>