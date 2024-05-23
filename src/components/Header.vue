<template>
    <div class="header">
     <h1 style="font-size: 22px;"><span>Transferências financeiras | Agendamento </span></h1>
 </div>
 <div >
 
 <Tabs value="0">
            <TabList>
                <Tab value="0" class="tabFont">Home</Tab>
                <Tab value="1" class="tabFont">Registrar</Tab>
                <Tab value="2" class="tabFont">Message</Tab>
                <Tab value="3" class="tabFont">Help</Tab>
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

</div>
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
 /*
 header {
   line-height: 1.5;
 }
 
 .logo {
   display: block;
   margin: 0 auto 2rem;
 }
 
 @media (min-width: 1024px) {
   header {
     display: flex;
     place-items: center;
     padding-right: calc(var(--section-gap) / 2);
   }
 
   .logo {
     margin: 0 2rem 0 0;
   }
 
   header .wrapper {
     display: flex;
     place-items: flex-start;
     flex-wrap: wrap;
   }
 } */
 </style>
 

   