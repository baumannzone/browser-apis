<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <MainBlock>
      <div class="text-center">
        <h1 class="mt-5">¿Sabías que tu navegador puede hablar?</h1>
        <h2 class="mt-0 text-muted">Y otras Web APIs</h2>
      </div>

      <hr class="my-5">

      <p class="text-center font-weight-bold mt-5 mb-0">
        Jorge Baumann · <a href="https://twitter.com/baumannzone">@baumannzone</a>
      </p>

      <p class="text-center text-muted">Full Stack Dev · Open Source · Open Source Weekends</p>

      <p class="text-center text-muted mt-0">
        <small>#io19Extended</small>
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
