<template>
    <div>
        <navbar />
        <!-- <router-link :to="{name: 'home'}">clique para voltar a home</router-link> -->
        <h1 style="color: blue;" v-text="titulo"></h1>
        <form action="#" method="POST">
            <label>Nome: </label> <br />
            <input type="text" name="nome" placeholder="Insira Seu Nome" v-model="nome" /><br /><br /><br />
            <label>Em qual unidade você está alocado? </label><br />
            <select name="selectUnidade" id="selectUnidade" v-model="unidadeSelecionada">
                <option selected value="">Selecione Uma Opção</option>
                <option v-for="unidade in unidadespassadas" v-text="unidade.nome" :value="unidade.codigo" :key="unidade.codigo"></option>
            </select>
            <br /><br /><br />
            <label>Atividades na empresa: </label><br />
            <textarea style="width: 300px;height:100px;" placeholder="Descreva sua atividade na empresa"
                v-model="descritivo"></textarea><br /><br />
            <input type="button" v-on:click="mostraDados" value="Salvar" />
            <!-- <input type="button" v-on:click="voltarHome" value="Voltar Home" /> -->
        </form>
        <br />
        <div v-if="mostraResultado" style="border:1px solid black;">
            <h1 style="color: red;">Resultado: </h1>
            <strong>Nome: </strong><span v-text="nome"></span><br /><br />
            <strong>Unidade: </strong><span v-text="unidadeSelecionada"></span><br /><br />
            <strong>Atividades: </strong><span v-text="descritivo"></span>
            <br /><br />
        </div>
    </div>
</template>

<script>
export default {
    props:["funcionarios"], 
    data(){
        return{
            contadorMethod: 0,
            contadorComputed: 0, 
            titulo: 'Curso de Vue.js - Exercício 1',
            unidades: [{
                        'nome': 'Sede',
                        'codigo': "1"
                    },
                    {
                        'nome': 'Tupis',
                        'codigo': "2"
                    },
                    {
                        'nome': 'Bhtrans',
                        'codigo': "3"
                    }
                ],
                unidadeSelecionada: "",
                nome: "",
                descritivo: "",
                mostraResultado: false, 
                unidadespassadas: [{
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
    },
    computed: {

            },

    methods: {
                mostraDados() {
                    if ((this.nome && this.descritivo && this.unidadeSelecionada) !== '') {
                        this.axios.post("http://10.0.2.15:3000/registros", {
                            nome: this.nome, 
                            unidade: this.unidadeSelecionada, 
                            cargo: "analista",
                            salario: 2000
                        }).then(response => {
                            alert("Dados salvos com sucesso.");
                            this.$router.push("/");
                        }).catch(error => {
                            alert("Erro");
                        })
                    } else {
                        alert('Favor preencher todos os campos');
                        this.mostraResultado = false;
                    }
                },

                voltarHome() {
                    this.$router.push({name: 'home'});
                }

            }
}
</script>

<style>

</style>