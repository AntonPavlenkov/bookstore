<template>
  <div id="app">
    <router-view></router-view>
    <cart></cart>
  </div>
</template>

<script>
import bookList from './components/BookList.vue'
import cart from './components/Cart.vue'
import cartService from './components/cart.service.js'
export default {
  name: 'app',
  components: {bookList,
              cart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: lightgray;
}
</style>
