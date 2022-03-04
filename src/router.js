import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './Homepage/Homepage.vue'
import Login from './Login/Login.vue'
import Register from './Register/Register.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/SignIn", component: Login },
    { path: "/SignUp", component: Register }
  ],mode:"history"
})
