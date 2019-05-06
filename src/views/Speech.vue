<template>
  <div class="speech">
    <MainBlock title="Speech synthesis">
      <p class="text-muted lead text-center">aka text-to-speech</p>

      <hr>

      <b-card class="mb-2">
        <h4>#1</h4>
        <b-form @submit="demo1">

          <b-form-group label="Text:" label-for="inputDemo1">
            <b-form-input id="inputDemo1" v-model="form1.input" placeholder="Type something.."></b-form-input>
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
            <b-form-input id="inputDemo2" v-model="form2.input" placeholder="Type something cool.."></b-form-input>
          </b-form-group>

          <b-form-group label="Pitch (Tone)" label-for="rangePitchDemo2">
            <b-form-input id="rangePitchDemo2" v-model="form2.pitch" type="range" min="0" max="2" step="0.05">
            </b-form-input>
            <small>Value: {{form2.pitch}}</small>
          </b-form-group>

          <!-- speed -->
          <b-form-group label="Rate (Speed)" label-for="rangeRateDemo2">
            <b-form-input id="rangeRateDemo2" v-model="form2.rate" type="range" min="0.46" max="3.6" step="0.01">
            </b-form-input>
            <small>Value: {{form2.rate}}</small>
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
              cconst text = 'Hola, soy Jorge Baumann y mi perro se llama Rambo'
              const synth = window.speechSynthesis
              const utterThis = new SpeechSynthesisUtterance(text)
              utterThis.pitch = 1.5
              utterThis.rate = 1.5
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
      voices: [],
      voiceNames: [],
      selectedVoiceName: 0,
      form1: {
        input: ''
      },
      form2: {
        input: '',
        pitch: 1,
        rate: 1
      }
    }
  },
  created () {
    // Check support for speech API
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = this.populateVoiceList
    } else {
      console.warn('Nope!')
    }
  },
  methods: {
    populateVoiceList () {
      this.voices = window.speechSynthesis.getVoices()
      this.voiceNames = this.voices.map((v) => {
        return { name: v.name, lang: v.lang }
      })
    },
    demo1 (ev) {
      ev.preventDefault()
      const text = this.demo1.input
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
