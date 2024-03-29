import Vue from 'vue'
import App from './App.vue'
import Titulo from './components/titulo'
import Tabela from './components/tabela'

Vue.config.productionTip = false

Vue.component('titulo', Titulo);
Vue.component('tabela', Tabela);

new Vue({
  render: h => h(App),
}).$mount('#app')
