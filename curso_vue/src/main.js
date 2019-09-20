import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import Titulo from './components/titulo'
import Tabela from './components/tabela'
import Formulario from './components/formulario'
import Navbar from './components/navbar'

Vue.use(VueRouter)

Vue.use(VueAxios, Axios)

Vue.use(BootstrapVue)


Vue.config.productionTip = false

Vue.component('titulo', Titulo);
Vue.component('tabela', Tabela);
Vue.component('formulario', Formulario);
Vue.component('navbar', Navbar);

const routes = [
  {path: '/', name: 'home', component: App}, 
  {path: '/tabela', component: Tabela}, 
  {path: '/formulario', name: 'cadastro', component: Formulario},
]

const router = new VueRouter({
  mode: 'history', 
  routes
})

new Vue({
  //render: h => h(App),
  router
}).$mount('#app')
