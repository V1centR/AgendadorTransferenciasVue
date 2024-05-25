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
                           <DatePicker v-model="datePayment" :manualInput="false" :minDate="today" dateFormat="dd/mm/yy" />
                        </div>
                     </td>
                     <td colspan="2"></td>
                  </tr>
                  <tr>
                     <td>Valor: </td>
                     <td>
                        <div class="register-input">
                           
                           <money3 v-model="valuePayment" v-bind="config" class="p-inputtext p-component"></money3>
                        </div>
                     </td>
                     <td colspan="2"></td>
                  </tr>
                  <tr>
                     <td>CTA Origem:</td>
                     <td>
                        <div class="accountsInputStyle">
                           <InputText type="text" v-model="ctaOrigem" :maxlength="8" style="text-transform: uppercase" />
                     </div>
                     </td>
                     <td>CTA Destino: </td>
                     <td>
                        <div class="accountsInputStyle">
                           <InputText type="text" v-model="ctaDestino" :maxlength="8" style="text-transform: uppercase" />
                     </div>
                     </td>
                  </tr>
                  <tr>
                     <td>&nbsp;</td>
                     <td>
                        <br>
                        <Button @click="submitDates" :disabled="!isDateValid" label="Registrar" />
                     </td>
                     <td></td>
                  </tr>
               </tbody>
            </table>
            <div style="width: 90%; margin-top: 10px;">
               <hr>
               <DataTables :startDate="formattedStartDate" :endDate="formattedEndDate" />
         </div>
         </template>
   </Card>
</template>
<script>
import { ref, computed, onMounted } from 'vue';
import DataTables from './DataTables.vue';
import { Money3Component } from 'v-money3'

export default {
  name: 'HomeTemplate',
  components: {
    DataTables,
    money3: Money3Component
  },
  setup() {
    const startDate = ref(0);
    const endDate = ref(0);
    const ctaOrigem = ref('');
    const ctaDestino = ref(null);
    const valuePayment = ref(null);
    const datePayment = ref(null);
    const today = new Date();


    const formattedStartDate = ref('');
    const formattedEndDate = ref('');

    const resetTime = (date) => {
      const newDate = new Date(date);
      newDate.setHours(0, 0, 0, 0);
      return newDate;
    };

    const isDateValid = computed(() => {
      return startDate.value && endDate.value;
    });

    const submitDates = () => {
      console.log("exec ok");
      formattedStartDate.value = resetTime(startDate.value).getTime();
      formattedEndDate.value = resetTime(endDate.value).getTime();
    };

    onMounted(() => {
      startDate.value = new Date();
      endDate.value = new Date();
      formattedStartDate.value = resetTime(startDate.value).getTime();
      formattedEndDate.value = resetTime(endDate.value).getTime();
    });

    return {
      ctaOrigem,
      ctaDestino,
      valuePayment,
      datePayment,
      startDate,
      endDate,
      today,
      formattedStartDate,
      formattedEndDate,
      submitDates,
      isDateValid,
      amount: '0',
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
        }
    };
  }
};
</script>
    
       