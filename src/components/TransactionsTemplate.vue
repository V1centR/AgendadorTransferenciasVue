<template>
  <Card>
     <template #title>Registrar</template>
     <template #content>
        <table>
           <tbody>
              <tr>
                 <td>Agendar para: </td>
                 <td>
                    <div class="register-input">
                       <DatePicker required v-model="agendamento.dataTransferencia" :manualInput="false" :minDate="today" dateFormat="dd/mm/yy" />
                    </div>
                 </td>
                 <td colspan="2"></td>
              </tr>
              <tr>
                 <td>Valor: </td>
                 <td>
                    <div class="register-input">
                       <money3 v-model="agendamento.valorTransferencia" v-bind="config" class="p-inputtext p-component" required></money3>
                    </div>
                 </td>
                 <td colspan="2"></td>
              </tr>
              <tr>
                 <td>CTA Origem:</td>
                 <td>
                    <div class="accountsInputStyle">
                       <InputText type="text" v-model="agendamento.ctaOrigem" :maxlength="8" style="text-transform: uppercase" required />
                    </div>
                 </td>
                 <td>CTA Destino: </td>
                 <td>
                    <div class="accountsInputStyle">
                       <InputText type="text" v-model="agendamento.ctaDestino" :maxlength="8" style="text-transform: uppercase" required />
                    </div>
                 </td>
              </tr>
              <tr>
                 <td>&nbsp;</td>
                 <td>
                    <br>
                    <Button @click="submitAgendamento" :disabled="!isFormValid" label="Registrar" />
                 </td>
                 <td></td>
              </tr>
           </tbody>
        </table>
        <div style="width: 90%; margin-top: 10px;">
           <hr>
           <Message v-if="showHideMessage" :severity="'warn'" :closable="false">{{ messageBlock }}</Message>
           <DataTables :startDate="formattedStartDate" :endDate="formattedEndDate" :key="childKey" />
        </div>
     </template>
  </Card>
</template>
<script>
import { ref, computed, onMounted } from 'vue';
import DataTables from './DataTables.vue';
import { Money3Component } from 'v-money3';
import axios from 'axios';

export default {
  name: 'HomeTemplate',
  components: {
    DataTables,
    money3: Money3Component
  },
  setup() {
    const today = new Date();
    const childKey = ref(0);
    const messageBlock = ref('');
    const showHideMessage = ref(false);

    const formatedDate = ref('');
    

    // Object
    const agendamento = ref({
      dataTransferencia: '',
      valorTransferencia: '',
      ctaOrigem: '',
      ctaDestino: '',
    });

    // Converting date to the required format 'dd-MM-yyyy'
    const formatDate = (date) => {
          const d = new Date(date);
          const day = String(d.getDate()).padStart(2, '0');
          const month = String(d.getMonth() + 1).padStart(2, '0');
          const year = d.getFullYear();
          return `${day}-${month}-${year}`;
        };

    const submitAgendamento = async () => {

      try {
        showHideMessage.value = false;
        formatedDate.value = agendamento.value.dataTransferencia;
        agendamento.value.dataTransferencia = formatDate(agendamento.value.dataTransferencia);
        agendamento.value.ctaOrigem = agendamento.value.ctaOrigem.toUpperCase();
        agendamento.value.ctaDestino = agendamento.value.ctaDestino.toUpperCase();

        const response = await axios.post('http://localhost:8080/agendamento', agendamento.value);

        if(response.data.status == "blocked"){
          showHideMessage.value = true;
          agendamento.value.dataTransferencia = formatedDate.value;
          isFormValid.value = false;
          messageBlock.value = response.data.message;
          return {};
        }


        agendamento.value = {
          dataTransferencia: '',
          valorTransferencia: '',
          ctaOrigem: '',
          ctaDestino: '',
        };
        reloadChildComponent();
      } catch (error) {
        console.error('Error in agendamento:', error);
      }
    };

    const formattedStartDate = ref('');
    const formattedEndDate = ref('');

    const resetTime = (date) => {
      const newDate = new Date(date);
      newDate.setHours(0, 0, 0, 0);
      return newDate;
    };

    const isFormValid = computed(() => {
      return agendamento.value.dataTransferencia && agendamento.value.valorTransferencia && agendamento.value.ctaOrigem && agendamento.value.ctaDestino;
    });

    const reloadChildComponent = () => {
      childKey.value += 1; // force reload child component after post data.
    };

    onMounted(() => {
      formattedStartDate.value = resetTime(new Date()).getTime();
      formattedEndDate.value = resetTime(new Date()).getTime();
    });

    return {
      agendamento,
      today,
      formattedStartDate,
      formattedEndDate,
      submitAgendamento,
      isFormValid,
      childKey,
      messageBlock,
      showHideMessage,
      formatedDate,
      config: {
        masked: false,
        prefix: 'R$ ',
        suffix: '',
        thousands: '.',
        decimal: ',',
        precision: 2,
        disableNegative: false,
        disabled: false,
        min: null,
        max: null,
        allowBlank: false,
        minimumNumberOfCharacters: 0,
        shouldRound: true,
        focusOnRight: false,
      },
    };
  }
};
</script>
    
       