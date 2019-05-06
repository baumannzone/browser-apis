<template>
  <div id="app">
    <div class="container">
      <div id="nav" class="py-4">
        <template v-for="route in routes">
          <router-link :to="route.to" :key="route.name">{{ route.name }}</router-link> ·
        </template>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      routes: [
        { to: '/', name: 'Home' },
        { to: '/speech', name: 'Speech' },
        { to: '/speech-recognition', name: 'Speech Recognition' },
        { to: '/battery', name: 'Battery' },
        { to: '/geolocation', name: 'Geolocation' },
        { to: '/vibration', name: 'Vibration' },
        { to: '/notifications', name: 'Notifications' },
        { to: '/bluetooth', name: 'Bluetooth' },
        { to: '/share', name: 'Share' },
        { to: '/orientation', name: 'Orientation' },
        { to: '/audio', name: 'Audio' }
      ]
    }
  },
  computed: {
    superRoutes () {
      const length = this.routes.length
      return length
    }
  }
}
</script>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50

  #nav
    a
      font-weight bold
      color #2c3e50

      &.router-link-exact-active
        color #42b983
</style>
