<template>
  <div id="app">

    <div class="container">

      <NavBase />

      <router-view/>

      <FooterBase />

    </div>

  </div>
</template>

<script>
import FooterBase from '@/components/FooterBase'
import NavBase from '@/components/NavBase'

export default {
  name: 'App',
  components: { NavBase, FooterBase }
}
</script>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50

</style>
