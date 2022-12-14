import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faStar,
  faMagnifyingGlass,
  faArrowsRotate,
  faSquareXmark
} from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faMagnifyingGlass, faArrowsRotate, faSquareXmark)

const inserted = (el) => {
  function imageLoad(targetElement) {
    const imgElement = targetElement
    // data-lazy 에 지정된 이미지 경로를 <img src=""> 에 셋팅 합니다.
    if (imgElement.getAttribute('data-lazy') !== null) {
      imgElement.setAttribute('src', imgElement.getAttribute('data-lazy'))
      imgElement.onload = function () {
        imgElement.removeAttribute('data-lazy')
      }
    }
  }

  function callIntersectionApi() {
    const options = {
      root: null,
      threshold: 0.5,
      rootMargin: '0px'
    }

    const lazyLoadCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 감지대상이 교차영역에 진입 할 경우
          imageLoad(entry.target)
          observer.unobserve(entry.target)
        }
      })
    }

    const lazyLoadingIO = new IntersectionObserver(lazyLoadCallback, options)
    lazyLoadingIO.observe(el)
  }

  // 지원되는 브라우저가 있기때문에, 이런식으로 처리
  window.IntersectionObserver ? callIntersectionApi() : imageLoad(el)
}

createApp(App)
  .use(store)
  .use(router)
  .directive('lazyload', inserted)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
