<template>
  <div class="speech">
    <MainBlock title="Speech synthesis">
      <p class="text-muted lead text-center">aka text-to-speech</p>
      <hr>
      <b-card class="mb-2">
        <h4>#1</h4>
        <b-form @submit="demo1">

          <b-form-group label="Text:" label-for="inputDemo1">
            <b-form-input id="inputDemo1" v-model="inputDemo1" placeholder="Type something.."></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" size="sm">Submit</b-button>
        </b-form>
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

      <b-card class="mb-2">
        <h4>#2</h4>
        <b-form @submit="demo2">

          <b-form-group label="Text:" label-for="inputDemo2">
            <b-form-input id="inputDemo2" v-model="inputDemo2" placeholder="Type something cool.."></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" size="sm">Submit</b-button>
        </b-form>
        <hr>
        <div class="d-flex justify-content-end">
          <b-button v-b-toggle="'demo2'" variant="outline-secondary" size="sm">Code</b-button>
        </div>
        <div class="mt-2">
          <b-collapse id="demo2">
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
  name: 'Speech',
  components: {
    MainBlock
  },
  data () {
    return {
      inputDemo1: '',
      showDemo1: false
    }
  },
  methods: {
    demo1 (ev) {
      ev.preventDefault()
      const text = this.inputDemo1
      const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(text)
      synth.speak(utterThis)
    },
    demo2 (ev) {
      ev.preventDefault()
      const text = this.inputDemo1
      const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(text)
      synth.speak(utterThis)
    }
  }
}
</script>

<style>

</style>
