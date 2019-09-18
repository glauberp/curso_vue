<template>
    <table border="1" style="width: 100%" name="resultados">
           <thead>
               <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Unidade</th>
                    <th scope="col">Salario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="funcionario in funcionarios" :key="funcionario.id">
                    <td>{{funcionario.nome}}</td>
                    <td>{{funcionario.cargo}}</td>
                    <td>{{funcionario.unidade}}</td>
                    <td>{{funcionario.salario}}</td>
                </tr>
                <tr>
                    <td colspan="4"><strong>Total salários methods: {{somaSalarioMethods()}}</strong></td>
                </tr>
                <tr>
                    <td colspan="4"><strong>Total salários computed: {{somaSalarioComputed}}</strong></td>
                </tr>
                <tr>
                    <td colspan="4"><strong>Total de methods {{contadorMethod}}</strong></td>
                </tr>
                <tr>
                    <td colspan="4"><strong>Total de computed: {{contadorComputed}}</strong></td>
                </tr>
            </tbody>
       </table>
</template>

<script>
export default {
    props:["funcionarios"], 
    data(){
        return{
            contadorMethod: 0,
            contadorComputed: 0
        }
    },
    computed: {
                somaSalarioComputed() {
                    this.contadorComputed++;
                    var total = 0;
                    for(var valor of this.funcionarios) {
                      total += valor.salario;
                    }
                    return total;
                }
            },

    methods: {
                somaSalarioMethods() {
                    this.contadorMethod++;
                    var total = 0;
                    for(var valor of this.funcionarios) {
                      total += valor.salario;
                    }
                    return total;
                }
            }
}
</script>

<style>

</style>