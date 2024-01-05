<script>
import navbarComponent from './components/navbarComponent.vue'
import productsComponent from './components/productsComponent.vue';
import cartComponent from './components/cartComponent.vue';

export default {
  components: {
    navbarComponent,
    productsComponent,
    cartComponent
  }
}
</script>

<template>
  <div class="container">
    <navbarComponent></navbarComponent>
    <cartComponent></cartComponent>
    <productsComponent></productsComponent>
  </div>
</template>

<style lang="scss">
@import "./assets/all.scss";
.table-image {
    height: 100px;
    width: 100px;
    object-fit: cover;
}
.card-img-top {
    height: 200px;
    object-fit: cover;
}
</style>
