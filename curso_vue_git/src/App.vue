<template>
  <div id="app">
    <titulo texto="teste" cor="red"></titulo>
    <tabela :funcionarios=funcionarios></tabela>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data: function () {
    return {
      funcionarios: [{
                        'codigo': '1',
                        'nome': 'Paulo1',
                        'cargo': 'Analista', 
                        'unidade': 'Tupis', 
                        'salario': 7000
                    },
                    {
                        'codigo': '2',
                        'nome': 'Natália',
                        'cargo': 'Redatora', 
                        'unidade': 'Fazenda',
                        'salario': 10000
                    }
                ]
    }
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
}
</style>
