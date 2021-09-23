<template>
<section>
    <nav-bar></nav-bar>
  <div class="row cardPage">
      <card-home v-for="product in products" :key="product.id" :product="product"></card-home>
  </div>
  <HFooter></HFooter>
</section>
</template>

<script>
import NavBar from '../components/Navbar.vue'
import CardHome from '../components/CardHome.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
    name: 'Homepage',
    components:{
        NavBar,
        CardHome,
        HFooter
    },
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    created(){
        this.$store.dispatch('productFetch')
    }
};
</script>

<style>
</style>