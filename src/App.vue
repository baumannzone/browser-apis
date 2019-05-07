<template>
  <div id="app">
    <div class="container">
      <div id="nav" class="py-4 text-center">
        <template v-for="(route, idx) in routes">
          <router-link :to="route.to" :key="route.name">{{ route.name }}</router-link>
          <span v-if="idx !== lastNavItemIdx" :key="idx"> · </span>
        </template>
      </div>
      <router-view/>
      <footer class="my-5">
        <div class="text-center">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="https://github.com/baumannzone/browser-apis" target="_blank">
                <i class="github-ico fab fa-github"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://twitter.com/baumannzone" target="_blank">
                <i class="twitter-ico fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://medium.com/@baumannsito/make-your-browser-talk-with-javascript-614546028076" target="_blank">
                <i class="medium-ico fab fa-medium-m"></i>
              </a>
            </li>
          </ul>
          <small>Powered by
            <a href="https://vuejs.org/">
              <i class="vue-ico fab fa-vuejs"></i>
            </a>
            +
            <a href="https://bootstrap-vue.js.org/">
              <i class="bootstrap-ico fab fa-bootstrap"></i>
            </a>
          </small>
        </div>
      </footer>
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

  footer
    .github-ico
      color #24292d
    .twitter-ico
      color #48AAE6
    .vue-ico
      color #4fc08d
    .medium-ico
      color #2f2f2f
    .bootstrap-ico
      color #563c7c
</style>
