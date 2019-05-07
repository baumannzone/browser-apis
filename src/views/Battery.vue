<template>
  <div class="battery-api">
    <MainBlock title="Battery Status API">
      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div class="d-flex justify-content-end">
          <b-button v-b-toggle="'demo1'" variant="outline-secondary" size="sm">Code</b-button>
        </div>
        <div class="mt-2">
          <b-collapse id="demo1">
            <highlight-code lang="javascript">
              const text = 'Hola, soy Jorge Baumann'
              const synth = window.speechSynthesis
              const utterThis = new SpeechSynthesisUtterance(text)
              synth.speak(utterThis)
            </highlight-code>
          </b-collapse>
        </div>
      </b-card>
    </MainBlock>

  </div>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue'

export default {
  name: 'BatteryAPI',
  components: {
    MainBlock
  }
}
</script>

<style scoped>

</style>
