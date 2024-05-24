<template>
    <div>
    <Message v-if="showMessage" :severity="'warn'" :closable="false" >{{ message.text }}</Message>
    <Message v-if="showEmptySearchMessage" :severity="'info'" :closable="false" >{{ message.text }}</Message>
      <DataTable v-if="showHideDataTable" :value="agendamentos" paginator :rows="5" stripedRows :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
        <Column field="id" header="ID" style="width: 25%"></Column>
        <Column field="dataRegistro" header="Registro" style="width: 25%"></Column>
        <Column field="dataTransferencia" header="Transferencia" style="width: 25%"></Column>
        <Column field="ctaOrigem" header="Origem" style="width: 25%"></Column>
        <Column field="ctaDestino" header="Destino" style="width: 25%"></Column>
        <Column field="valorTransferencia" header="Valor" style="width: 25%"></Column>
        <Column field="taxaAplicavel" header="Taxa" style="width: 25%"></Column>
        <Column field="status" header="Status" style="width: 25%;font-weight: bold;"></Column>
      </DataTable>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  import DataTable from 'primevue/datatable';
  
  export default {
    name: 'DataTables',
    setup(){
        const showMessage = ref(false);
        const showEmptySearchMessage = ref(false);
        const formatedStartDate = ref('');
        const formatedEndDate = ref('');
        const showHideDataTable = ref(true);
        return {
            showMessage,
            formatedStartDate,
            formatedEndDate,
            showEmptySearchMessage,
            showHideDataTable
        }
    },
    props: {
      startDate: {
        type: Number,
        required: true
      },
      endDate: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        agendamentos: [],
        message:[]
      };
    },
    mounted() {
        
      //this.fetchAgendamentos();
    },
    methods: {

     formatDate(date){
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    },
        
      async fetchAgendamentos() {
        this.formatedStartDate = this.formatDate(this.startDate);
        this.formatedEndDate = this.formatDate(this.endDate);
        if (this.endDate < this.startDate) {
            this.message = {text: 'Data final menor que data inicial.'};
            this.showMessage = true;
            
          return false;
        }
  
        try {
            const response = await axios.get(`http://localhost:8080/agendamento/range/${this.formatedStartDate}/${this.formatedEndDate}`);
            this.agendamentos = response.data;

            if(response.data.length === 0){
                this.showEmptySearchMessage = true;
                this.showHideDataTable = false;
                this.showMessage = false;
                this.message = {text: 'Não há agendamentos no período.'};
                return false;
            }

            this.showMessage = false;
            this.showEmptySearchMessage = false;
            this.showHideDataTable = true;
        } catch (error) {
          console.error('Error fetching agendamentos:', error);
        }
      }
    },
    watch: {
      startDate: 'fetchAgendamentos',
      endDate: 'fetchAgendamentos'
    },
  };
  </script>
  