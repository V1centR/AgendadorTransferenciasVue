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
          
          <div style="width: 60%; margin-top: 10px;">
            <hr>
            <DataTable :value="agendamentos" paginator :rows="5" stripedRows  :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
                <Column field="id" header="Name" style="width: 25%"></Column>
                <Column field="registro" header="Registro" style="width: 25%"></Column>
                <Column field="transferencia" header="Transferencia" style="width: 25%"></Column>
                <Column field="origem" header="Origem" style="width: 25%"></Column>
                <Column field="destino" header="Destino" style="width: 25%"></Column>
                <Column field="valor" header="Valor" style="width: 25%"></Column>
                <Column field="taxa" header="Taxa" style="width: 25%"></Column>
                <Column field="status" header="Status" style="width: 25%"></Column>
            </DataTable>
        </div>
        </template>
    
</Card>
    
    
</template>
     <script>
        import { ref } from 'vue';
        export default {
            name:'TrasactionsTemplate',
            data() {
                return {
                    customers: null
                };
        }   ,
            setup() {
           // const agendamentos = ref(null);
            const inputValue = ref('');
            const startDate = ref(null);
            const endDate = ref(null);
    
    
     const agendamentos = [
        {
            id: 1,
            registro: '2024-05-22',
            transferencia: '2024-05-22',
            origem: 'XYZ654',
            destino: 'QPO123',
            valor: 1000.00,
            taxa: 15.00,
            status: 'Concluída'
        },
        {
            id: 2,
            registro: '2024-05-21',
            transferencia: '2024-05-21',
            origem: 'LKJ5654',
            destino: 'AJSH156',
            valor: 500.00,
            taxa: 10.00,
            status: 'Pendente'
        },
        {
            id: 3,
            registro: '2024-05-21',
            transferencia: '2024-05-21',
            origem: 'X2K888',
            destino: 'OP78FG',
            valor: 500.00,
            taxa: 10.00,
            status: 'Pendente'
        }
    ];
    
    
            return {
                inputValue,
                startDate,
                endDate,
                agendamentos
            };
        }
       }
     </script>
    
       