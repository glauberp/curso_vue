<template>
  <div>
    <navbar />
    <h1>Bem vindo!</h1>
  </div>
  <!-- <div id="app">
    <router-link to="/formulario">Clique para ir ao Formulario</router-link>
    <titulo texto="teste" cor="red"></titulo>
    <tabela></tabela>
    <formulario :unidadespassadas=unidadesAPassar></formulario>
  </div> -->
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
                ],
        unidadesAPassar: [{
                        'nome': 'Sede',
                        'codigo': "1"
                    },
                    {
                        'nome': 'Tupis',
                        'codigo': "2"
                    },
                    {
                        'nome': 'Prefeitura',
                        'codigo': "3"
                    }
                ],
    }
  }

}
</script>

<style>
#app {
  
}
</style>
