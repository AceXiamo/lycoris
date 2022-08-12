import {createApp} from 'vue'
import './assets/style/global.scss'
import App from './App.vue'
import router from './router/index'

let app = createApp(App)
app.use(router)
app.mount('#app')
