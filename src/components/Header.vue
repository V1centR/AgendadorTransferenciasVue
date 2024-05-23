<template>
    <div class="header">
     <h1 style="font-size: 22px;"><span>Transferências financeiras | Agendamento </span></h1>
 </div>
 <Tabs value="0">
    <TabList>
        <Tab value="0" class="tabFont">Home</Tab>
        <Tab value="1" class="tabFont">Registrar</Tab>
        <Tab value="2" class="tabFont">Help!</Tab>
    </TabList>
    <TabPanels style="background-color: transparent; padding: 6px">
        <TabPanel value="0">
            <HomeTemplate />
        </TabPanel>
        <TabPanel value="1">
            <TransactionsTemplate/>
        </TabPanel>
        <TabPanel value="2">
            <MessageTemplate/>
        </TabPanel>
    </TabPanels>
  </Tabs>
 </template>
<script>
import HomeTemplate from './HomeTemplate.vue';
import MessageTemplate from './MessageTemplate.vue';
import TransactionsTemplate from './TransactionsTemplate.vue';
export default {
  name: 'Header',
  components: {
    HomeTemplate,
    TransactionsTemplate,
    MessageTemplate
  }
}
 </script>
 <style>
 .tabFont{
  font-size: 16px;
 }
 </style>
 

   