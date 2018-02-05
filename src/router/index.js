import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Header'
import Home from '@/pages/Home'
import Classify from '@/pages/Classify'
import PersonInfo from '@/pages/PersonInfo'
import ShoppingCart from '@/pages/ShoppingCart'
import ModifyPersonInfo from "@/pages/ModifyPersonInfo"
import ShippingAddress from "@/pages/ShippingAddress"
import BookDetails from "@/pages/BookDetails"
import SettlementCenter from "@/pages/SettlementCenter"
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/classify',
      name: 'Classify',
      component: Classify
    },{
      path: '/personInfo',
      name: 'PersonInfo',
      component: PersonInfo
    },{
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },{
      path: '/modifyPersonInfo',
      name: 'ModifyPersonInfo',
      component: ModifyPersonInfo
    },{
      path: '/shippingAddress',
      name: 'ShippingAddress',
      component: ShippingAddress
    },
    {
      path: '/bookDetails',
      name: 'BookDetails',
      component: BookDetails
    },
    {
      path: '/setCenter',
      name: 'SettlementCenter',
      component: SettlementCenter
    },
  ]
})
