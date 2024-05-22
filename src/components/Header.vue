<template>
    <div class="header">
     <h1 style="font-size: 22px;"><span>Transferências financeiras | Agendamento </span></h1>
 </div>
 <div style="margin-top: 8px;">
 <TabMenu :model="items"/>
</div>
 </template>
 <script>
import { ref } from 'vue';
   export default {
    name:'Header',

    setup() {
      const items = ref([
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Transactions', icon: 'pi pi-chart-line' },        
        { label: 'Messages', icon: 'pi pi-inbox' },
        { label: 'Help', icon: 'pi pi-list' },]);
    return {
      items,
        } 
    },       
   }
 </script>

   