import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCard from '../views/AddCard.vue'
import Top from '../components/Top.vue'
import Card from '../components/Card.vue'
import CardStack from '../components/CardStack.vue'
import CardForm from '../components/CardForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'home',
        components: {
          default: Top,
          card: Card,
          cardStack: CardStack
        }
      },
    ] 
  },
  {
    path: '/addcard',
    name: 'AddCard',
    component: AddCard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: 'create',
        components: {
          default: Top,
          card: Card,
          cardForm: CardForm
        }
      },
    ] 
  }
]

const router = new VueRouter({
  routes
})

export default router
