import './assets/main.css'
import '../node_modules/primeflex/primeflex.css'

import { createApp } from 'vue'
import App from './App.vue';
import PrimeVue from 'primevue/config';

import Aura from 'primevue/themes/aura';
//import Lara from 'primevue/themes/lara';
//import Nora from 'primevue/themes/nora';


import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import FloatLabel from 'primevue/floatlabel';
import DatePicker from 'primevue/datepicker';
import Card from 'primevue/card';
import TabMenu from 'primevue/tabmenu';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const app = createApp(App);

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

app.component('TabMenu', TabMenu);
app.component('Card', Card);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('DatePicker', DatePicker);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('FloatLabel', FloatLabel);

app.mount('#app')
