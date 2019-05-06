import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  {path: '/', name: 'Home', viewName: 'Home'},
  {path: '/speech', name: 'Speech', viewName: 'Speech'},
  {path: '/speech-recognition', name: 'SpeechRecognition', viewName: 'SpeechRecognition'},
  {path: '/battery', name: 'Battery', viewName: 'Battery'},
  {path: '/vibration', name: 'Vibration', viewName: 'Vibration'},
  {path: '/geolocation', name: 'Geolocation', viewName: 'Geolocation'},
  {path: '/notifications', name: 'Notifications', viewName: 'Notifications'},
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/views/${route.viewName}.vue`)
  }
})

Vue.use(Router)

const router = new Router({
  routes
})

export default router
