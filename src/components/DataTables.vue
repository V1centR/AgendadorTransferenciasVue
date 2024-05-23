<template>
   <DataTable :value="agendamentos" paginator :rows="5" stripedRows  :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
        <Column field="id" header="ID" style="width: 25%"></Column>
        <Column field="dataRegistro" header="Registro" style="width: 25%"></Column>
        <Column field="dataTransferencia" header="Transferencia" style="width: 25%"></Column>
        <Column field="ctaOrigem" header="Origem" style="width: 25%"></Column>
        <Column field="ctaDestino" header="Destino" style="width: 25%"></Column>
        <Column field="valorTransferencia" header="Valor" style="width: 25%"></Column>
        <Column field="taxaAplicavel" header="Taxa" style="width: 25%"></Column>
        <Column field="status" header="Status" style="width: 25%"></Column>
    </DataTable>
</template>
<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    name:'DataTables',
    data() {
        return {
            agendamentos: []
        };
    },
    mounted() {
        this.fetchAgendamentos()
    },
    methods: {
        async fetchAgendamentos() {
            try {
                const response = await axios.get('http://localhost:8080/agendamento/today')
                this.agendamentos = response.data
            } catch (error) {
                console.error('Error fetching agendamentos:', error)
            }
        }
    },
    setup() {
        const agendamentos = ref(null);
        const inputValue = ref('');
        const startDate = ref(null);
        const endDate = ref(null);

        return {
            agendamentos,
            inputValue,
            startDate,
            endDate,
        };
    }
}
</script>