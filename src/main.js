import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faStar,
  faMagnifyingGlass,
  faArrowsRotate
} from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faMagnifyingGlass, faArrowsRotate)

createApp(App)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
