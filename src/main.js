import './assets/main.css'
import '../node_modules/primeflex/primeflex.css'
import "vue3-ui-preloader/dist/loader.css"

import { createApp } from 'vue'
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router/router'

import Aura from 'primevue/themes/aura';
//import Lara from 'primevue/themes/lara';
//import Nora from 'primevue/themes/nora';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';


import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import FloatLabel from 'primevue/floatlabel';
import DatePicker from 'primevue/datepicker';
import Card from 'primevue/card';
import Message from 'primevue/message';

//TABS 
import TabMenu from 'primevue/tabmenu';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';
import InlineMessage from 'primevue/inlinemessage';
import loader from "vue3-ui-preloader";

import money from 'v-money3'


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const app = createApp(App);

app.use(router);
app.use(ToastService);
app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }});

app.component('Toast', Toast); 
app.component('loader', loader);
app.component('money', money);
app.component('InlineMessage', InlineMessage);
app.component('Message', Message);
app.component('Tag', Tag);
app.component('Tabs', Tabs);
app.component('TabList', TabList);
app.component('Tab', Tab);
app.component('TabPanels', TabPanels);
app.component('TabPanel', TabPanel);

app.component('TabMenu', TabMenu);
app.component('Card', Card);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('DatePicker', DatePicker);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('FloatLabel', FloatLabel);

app.mount('#app')
