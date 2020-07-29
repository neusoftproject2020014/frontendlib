import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/home.vue'
import Customer from '../components/customer/customer.vue'
import Product from '../components/product/product.vue'
import Room from '../components/room/room.vue'
import ReportForm from '../components/reportform/reportform.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/room',
    name: 'Room',
    component: Room
  },
  {
    path: '/reportform',
    name: 'ReportForm',
    component: ReportForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
