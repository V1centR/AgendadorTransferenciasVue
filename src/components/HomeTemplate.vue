<template>
    <Card>
        <template #title>Home</template>
        <template #content>
            <div style="margin: 10px; width: 40%;">
            <div class="formgrid grid">
                <div class="field col">
                    <div class="flex flex-column gap-2">
                        <label for="username">Data Inicial:</label>
                        <DatePicker v-model="startDate" dateFormat="dd/mm/yy" />
                        
                    </div>
                </div>
                <div class="field col">
                    <div class="flex flex-column gap-2">
                        <label for="username">Data final:</label>
                        <DatePicker v-model="endDate" dateFormat="dd/mm/yy" />
                        
                    </div>
                </div>
            </div>
            <div style="">
                <Button label="Buscar" />
            </div>
            
        </div>
        <hr>   
        <div style="width: 60%;">
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
            name:'HomeTemplate',
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
    
       