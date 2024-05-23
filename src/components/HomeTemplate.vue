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
        <div style="width: 90%;">
            <DataTables/>
        </div>
        </template>
    </Card>    
</template>
<script>
import { ref } from 'vue';
import DataTables from './DataTables.vue';
   export default {
      name:'HomeTemplate',
      components: {
            DataTables
      },
      setup() {
         const startDate = ref(null);
         const endDate = ref(null);
         return {
            startDate,
            endDate,
         };
      }
   }
</script>
    
       