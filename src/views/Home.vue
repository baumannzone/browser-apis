<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <MainBlock>
      <div class="text-center">
        <h1 class="mt-5">¿Sabías que tu navegador puede hablar?</h1>
        <h2 class="mt-0 text-muted">Y otras Web APIs</h2>
      </div>
      <p class="text-right font-weight-bold mt-5">
        Jorge Baumann · <a href="https://twitter.com/baumannzone">@baumannzone</a>
      </p>
    </MainBlock>
  </div>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue'

export default {
  name: 'home',
  components: {
    MainBlock
  }
}
</script>
