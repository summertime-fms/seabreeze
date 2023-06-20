import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min';
import { svgSpritePlugin } from 'vue-svg-sprite'

createApp(App).use(store).use(router).use(svgSpritePlugin).mount('#app')
