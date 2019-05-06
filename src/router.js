import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/speech', name: 'Speech' },
  { path: '/speech-recognition', name: 'SpeechRecognition' },
  { path: '/battery', name: 'Battery' },
  { path: '/vibration', name: 'Vibration' },
  { path: '/geolocation', name: 'Geolocation' },
  { path: '/notifications', name: 'Notifications' },
  { path: '/audio', name: 'Audio' },
  { path: '/share', name: 'Share' },
  { path: '/orientation', name: 'Orientation' },
  { path: '/bluetooth', name: 'Bluetooth' },
  { path: '/media-recorder', name: 'MediaRecorder' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/views/${route.name}.vue`)
  }
})

Vue.use(Router)

const router = new Router({
  routes
})

export default router
