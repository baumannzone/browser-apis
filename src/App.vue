<template>
  <div id="app">
    <div class="container">
      <div id="nav" class="py-4">
        <template v-for="(route, idx) in routes">
          <router-link :to="route.to" :key="route.name">{{ route.name }}</router-link>
          <span v-if="idx !== lastNavItemIdx" :key="idx"> · </span>
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
    lastNavItemIdx () {
      return this.routes.length - 1
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
