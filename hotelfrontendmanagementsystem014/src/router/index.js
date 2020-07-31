import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/home.vue'

import CustomerMain from '../components/customer/customer.vue'
import CustomerList from '../components/customer/list.vue'
import CustomerCheckIn from '../components/customer/checkin.vue'
import CustomerModify from '../components/customer/modify.vue'
import CustomerView from '../components/customer/view.vue'

import RoomMain from '../components/room/room.vue'
import RoomList from '../components/room/list.vue'
import RoomAdd from '../components/room/add.vue'
import RoomModify from '../components/room/modify.vue'
import RoomView from '../components/room/view.vue'

import Product from '../components/product/product.vue'
import ReportMain from '../components/reportform/report.vue'
import ReportCheckInForm from '../components/reportform/checkinform.vue'
import ReportCheckOutForm from '../components/reportform/checkoutform.vue'
import ReportFinancialForm from '../components/reportform/financialform.vue'

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
    name: 'roommain',
    component: RoomMain,
  	children:[
  		{
  			path:"list",
  			name:"roomlist",
  			component:RoomList
  		},
  		{
  			path:"add",
  			name:"roomadd",
  			component:RoomAdd
  		},
		{
			path:"modify/:rid",
			name:"roommodify",
			component:RoomModify,
			props:true
		},
		{
			path:"view/:rid",
			name:"roomview",
			component:RoomView
		},
  		{
  			path:"", redirect: "list"
  		},
  		
  	]
  },
  {
    path: '/report',
    name: 'reportmain',
    component: ReportMain,
  	children:[
  		{
  			path:"checkinform",
  			name:"reportcheckinform",
  			component:ReportCheckInForm
  		},
		{
			path:"checkoutform",
			name:"reportcheckoutform",
			component:ReportCheckOutForm
		},
		{
			path:"financialform",
			name:"reportfinancialform",
			component:ReportFinancialForm
		},  		
  		{
  			path:"", redirect: "checkinform"
  		},
  		
  	]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
