import './assets/css/fonts.css'
import './assets/css/reset.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
//import { VueRecaptchaPlugin } from 'vue-recaptcha/head';

const app = createApp(App)
app.use(store);
app.use(router);
/*app.use(VueRecaptchaPlugin, {
    v2SiteKey: '6LfhH5gqAAAAAJtJeGKITbVYEp5yuLvcKHbXwH3c',
  })*/

router.isReady().then(() => {
    app.mount('#app')
})
