import { createApp } from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import Vue from "@vue/cli-plugin-eslint/eslintOptions";
Vue.config.productionTip = false
Vue.use(VueCompositionApi)
createApp(App).mount('#app')

new Vue({
    render: h => h(App),
}).$mount('#app')
