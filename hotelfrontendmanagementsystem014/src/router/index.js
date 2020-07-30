import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/home.vue'

import CustomerMain from '../components/customer/customer.vue'
import CustomerList from '../components/customer/list.vue'
import CustomerCheckIn from '../components/customer/checkin.vue'
import CustomerModify from '../components/customer/modify.vue'
import CustomerView from '../components/customer/view.vue'

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
  // customer的router
  {
    path: '/customer',
    name: 'customermain',
    component: CustomerMain,
	children:[
		{
			path:"list",
			name:"customerlist",
			component:CustomerList
		},
		{
			path:"checkin",
			name:"customercheckin",
			component:CustomerCheckIn
		},
		{
			path:"modify/:id",
			name:"customermodify",
			component:CustomerModify,
			props:true
		},
		{
			path:"view/:id",
			name:"customerview",
			component:CustomerView,
			props:true
		},
		{
			path:"", redirect: "list"
		},
		
	]
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
