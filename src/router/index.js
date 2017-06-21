import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import bookList from '@/components/BookList.vue'
import bookFilter from '@/components/BookFilter.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bookList',
      component: bookList
    }
  ]
})
