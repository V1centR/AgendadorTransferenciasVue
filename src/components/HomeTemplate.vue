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
                <Button @click="submitDates" label="Buscar" />
            </div>
        </div>
        <hr>
        <div style="width: 90%;">
            <DataTables :startDate="formattedStartDate" :endDate="formattedEndDate" :key="dataTablesKey" />
        </div>
        </template>
    </Card>    
</template>
<script>
import { ref } from 'vue';
import DataTables from './DataTables.vue';

export default {
  name: 'HomeTemplate',
  components: {
    DataTables
  },
  setup() {
    const startDate = ref(new Date());
    const endDate = ref(new Date());
    const dataTablesKey = ref(0);

    const formatDate = (date) => {
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    };

    const formattedStartDate = ref(formatDate(startDate.value));
    const formattedEndDate = ref(formatDate(endDate.value));

    const submitDates = () => {
      formattedStartDate.value = formatDate(startDate.value);
      formattedEndDate.value = formatDate(endDate.value);
      dataTablesKey.value += 1;
      console.log("Datas submetidas: ", formattedStartDate.value, formattedEndDate.value);
    };

    return {
      startDate,
      endDate,
      submitDates,
      dataTablesKey,
      formattedStartDate,
      formattedEndDate
    };
  }
};
</script>
    
       