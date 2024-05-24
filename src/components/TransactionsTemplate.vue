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
                           <DatePicker v-model="endDate" dateFormat="dd/mm/yy" />
                        </div>
                     </td>
                     <td colspan="2"></td>
                  </tr>
                  <tr>
                     <td>Valor: </td>
                     <td>
                        <div class="register-input">
                           <InputText type="text" v-model="value" />
                        </div>
                     </td>
                     <td colspan="2">&nbsp; taxa: +888%</td>
                  </tr>
                  <tr>
                     <td>CTA Origem:</td>
                     <td>
                        <div class="accountsInputStyle">
                           <InputText type="text" v-model="ctaOrigem" />
                     </div>
                     </td>
                     <td>CTA Destino: </td>
                     <td>
                        <div class="accountsInputStyle">
                           <InputText type="text" v-model="ctaDestino" />
                     </div>
                     </td>
                  </tr>
                  <tr>
                     <td>&nbsp;</td>
                     <td>
                        <br>
                        <Button label="Registrar" />
                     </td>
                     <td></td>
                  </tr>
               </tbody>
            </table>
            <div style="width: 90%; margin-top: 10px;">
               <hr>
               <DataTables/>
         </div>
         </template>
   </Card>
</template>
<script>
import { ref } from 'vue';
import DataTables from './DataTables.vue';
   export default {
      name:'TransactionsTemplate',
      components: {
            DataTables
      },
      setup() {
         const startDate = ref(null);
         const endDate = ref(null);
         const ctaOrigem = ref(null);
         return {
            startDate,
            endDate,
         };
      }
   }
</script>
    
       