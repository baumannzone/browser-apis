<template>
  <div id="nav" class="py-4 text-center">
    <template v-for="(route, idx) in routes">
      <router-link :to="route.to" :key="route.name">{{ route.name }}</router-link>
      <span v-if="idx !== lastNavItemIdx" :key="idx"> · </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NavBase',
  data () {
    return {
      routes: [
        { to: '/', name: 'Home' },
        { to: '/speech', name: 'Speech Synthesis' },
        { to: '/battery', name: 'Battery' },
        { to: '/geolocation', name: 'Geolocation' },
        { to: '/vibration', name: 'Vibration' },
        { to: '/notifications', name: 'Notifications' },
        { to: '/share', name: 'Share' },
        { to: '/orientation', name: 'Orientation' },
        { to: '/audio', name: 'Audio' },
        { to: '/bluetooth', name: 'Bluetooth' },
        { to: '/speech-recognition', name: 'Speech Recognition' },
        { to: '/media-recorder', name: 'Media Recorder' },
        { to: '/image-capture', name: 'Image Capture' }
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

  #nav
    a
      font-weight bold
      color #2c3e50

      &.router-link-exact-active
        color #42b983

</style>
