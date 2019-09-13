<template>
  <footer class="my-5">
    <hr class="mb-5">
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
        <li class="list-inline-item">
          <a href="https://www.youtube.com/channel/UCTTj5ztXnGeDRPFVsBp7VMA" target="_blank">
            <i class="youtube-ico fab fa-youtube"></i>
          </a>
        </li>
      </ul>

      <span>Powered by
        <a href="https://vuejs.org/">
          <i class="vue-ico fab fa-vuejs"></i>
        </a>
        +
        <a href="https://bootstrap-vue.js.org/">
          <i class="bootstrap-ico fab fa-bootstrap"></i>
        </a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBase'
}
</script>

<style lang="stylus">
  footer
    ul li a
      font-size 18px
    .github-ico
      color #24292d
    .youtube-ico
      color #ff0400
    .twitter-ico
      color #48AAE6
    .vue-ico
      color #4fc08d
    .medium-ico
      color #2f2f2f
    .bootstrap-ico
      color #563c7c

</style>
