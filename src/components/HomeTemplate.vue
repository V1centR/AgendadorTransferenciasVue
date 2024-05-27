<template>
  <Card>
     <template #title>Home</template>
     <template #content>
        <div style="margin: 10px; width: 40%;">
           <div class="formgrid grid">
              <div class="field col">
                 <div class="flex flex-column gap-2">
                    <label for="startDate">Data Inicial:</label>
                    <DatePicker v-model="startDate" dateFormat="dd/mm/yy" />
                 </div>
              </div>
              <div class="field col">
                 <div class="flex flex-column gap-2">
                    <label for="endDate">Data Final:</label>
                    <DatePicker v-model="endDate" dateFormat="dd/mm/yy" />
                 </div>
              </div>
           </div>
           <div>
              <Button @click="submitDates" :disabled="!isDateValid" label="Buscar" />
           </div>
        </div>
        <hr>
        <div style="width: 90%;">
           <DataTables :startDate="formattedStartDate" :endDate="formattedEndDate" :key="componentKey" />
        </div>
        <div style="font-weight: bold; margin-top: 10px; font-size: 10px;">
           *AP : á pagar<br>
           *OK : pago
        </div>
     </template>
  </Card>
</template>
<script>
import { ref, computed, onMounted} from 'vue';
import DataTables from './DataTables.vue';

export default {
  name: 'HomeTemplate',
  components: {
    DataTables
  },
  props: {
      reloadKey: {
      type: Number,
      required: true,
    }
  },
  watch: {
    reloadKey() {
     // console.log("REFRESH ACCPETED!");
      this.forceRerender();
    },
  },
  methods:{
    forceRerender() {
      this.componentKey += 1;
      //console.log("forceRerender exec");
    }
  },
  setup() {   

    const startDate = ref(null);
    const endDate = ref(null);
    const formattedStartDate = ref(0);
    const formattedEndDate = ref(0);
    const componentKey = ref(0);

    const resetTime = (date) => {
      const newDate = new Date(date);
      newDate.setHours(0, 0, 0, 0);
      return newDate;
    };

    const isDateValid = computed(() => {
      return startDate.value && endDate.value;
    });

    const submitDates = () => {
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
      startDate,
      endDate,
      formattedStartDate,
      formattedEndDate,
      submitDates,
      isDateValid,
      componentKey
    };
  }
};
</script>