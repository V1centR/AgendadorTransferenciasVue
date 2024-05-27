<template>
  <div>
     <Message v-if="showMessage" :severity="'warn'" :closable="false">{{ message.text }}</Message>
     <Message v-if="showEmptySearchMessage" :severity="'info'" :closable="false">{{ message.text }}</Message>
     <DataTable v-if="showHideDataTable" :sortField="'id'" :sortOrder="-1" :value="agendamentos" paginator :rows="5" stripedRows :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem;">
        <Column field="id" header="ID" style="width: 25%; background: none; color: #334155;"></Column>
        <Column field="dataRegistro" header="Registro" style="width: 25%"></Column>
        <Column field="dataTransferencia" header="Transferencia" style="width: 25%"></Column>
        <Column field="ctaOrigem" header="Origem" style="width: 25%"></Column>
        <Column field="ctaDestino" header="Destino" style="width: 25%"></Column>
        <Column field="valorTransferencia" header="Valor" style="width: 25%">
           <template #body="slotProps">
              {{ formatCurrency(slotProps.data.valorTransferencia) }}
           </template>
        </Column>
        <Column field="taxaAplicavel" header="Taxa" style="width: 25%">
          <template #body="slotProps">
              {{ "%" + slotProps.data.taxaAplicavel }}
           </template></Column>
        <Column field="status" header="Status" style="width: 25%;font-weight: bold;"></Column>
     </DataTable>
  </div>
</template>
<script>
import { ref } from 'vue';
import axios from 'axios';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Message from 'primevue/message';

export default {
  name: 'DataTables',
  components: {
    DataTable,
    Column,
    Message,
  },
  props: {
    startDate: {
      type: Number,
      required: true,
    },
    endDate: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const showMessage = ref(false);
    const showEmptySearchMessage = ref(false);
    const showHideDataTable = ref(true);
    const showHidePreloader = ref(true);

    return {
      showMessage,
      showEmptySearchMessage,
      showHideDataTable,
      showHidePreloader,
    };
  },
  data() {
    return {
      agendamentos: [],
      message: {},
    };
  },
  mounted() {
    this.fetchAgendamentos();
  },
  methods: {
    formatCurrency(value) {
      if (!value) return '';
      const number = parseFloat(value);
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(number);
    },

    formatDate(date) {
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    },

    async fetchAgendamentos() {
      this.showHidePreloader = true;
      const formattedStartDate = this.formatDate(this.startDate);
      const formattedEndDate = this.formatDate(this.endDate);
      if (this.endDate < this.startDate) {
        this.message = { text: 'Data final menor que data inicial.' };
        this.showMessage = true;
        this.showHidePreloader = false;
        return false;
      }

      try {
        const response = await axios.get(`http://localhost:8080/agendamento/range/${formattedStartDate}/${formattedEndDate}`);
        this.agendamentos = response.data;

        if (response.data.length === 0) {
          this.showEmptySearchMessage = true;
          this.showHideDataTable = false;
          this.showMessage = false;
          this.message = { text: 'Não há agendamentos no período.' };
          this.showHidePreloader = false;
          return false;
        }

        this.showMessage = false;
        this.showEmptySearchMessage = false;
        this.showHideDataTable = true;
        this.showHidePreloader = false;
      } catch (error) {
        console.error('Error fetching agendamentos:', error);
        this.showHidePreloader = false;
      }
    },
  },
  watch: {
    startDate: 'fetchAgendamentos',
    endDate: 'fetchAgendamentos',
  },
};
</script>
  