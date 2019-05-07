<template>
  <div class="speech">
    <!-- Sintesis de voz -->
    <MainBlock title="Speech Synthesis" subtitle="aka Text-To-Speech">

      <b-card class="mb-5">
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

      <b-card class="mb-5">
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

      <b-card class="mb-5">
        <h4>#3</h4>
        <b-form @submit="demo3">

          <b-form-group label="Text:" label-for="inputDemo3">
            <b-form-input id="inputDemo3" v-model="form3.input" placeholder="🦄 Type something awesome.."></b-form-input>
          </b-form-group>

          <b-form-group label="Voices:">
            <b-form-select v-model="selectedVoiceName" :options="voiceNames"></b-form-select>
          </b-form-group>

          <b-form-group label="Pitch (Tone)" label-for="rangePitchDemo3">
            <b-form-input id="rangePitchDemo3" v-model="form3.pitch" type="range" min="0" max="2" step="0.05">
            </b-form-input>
            <small>Value: {{form3.pitch}}</small>
          </b-form-group>

          <b-form-group label="Rate (Speed)" label-for="rangeRateDemo3">
            <b-form-input id="rangeRateDemo3" v-model="form3.rate" type="range" min="0.46" max="3.6" step="0.01">
            </b-form-input>
            <small>Value: {{form3.rate}}</small>
          </b-form-group>

          <b-button type="submit" variant="primary" size="sm">Submit</b-button>
        </b-form>
        <hr>
        <div class="d-flex justify-content-end">
          <b-button v-b-toggle="'demo3'" variant="outline-secondary" size="sm">Code</b-button>
        </div>
        <div class="mt-2">
          <b-collapse id="demo3">

            <highlight-code lang="javascript">
              // Check support for speech API
              if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
                speechSynthesis.onvoiceschanged = this.populateVoiceList
              } else {
                console.warn('Nope!')
              }
            </highlight-code>

            <highlight-code lang="javascript">

              // getVoices
              speechSynthesis.onvoiceschanged = () => {
                const text = 'Hola, soy Jorge Baumann y mi perro se llama Rambo 🐶'
                const synth = speechSynthesis
                const voices = synth.getVoices()
                const utterThis = new SpeechSynthesisUtterance(text)
                utterThis.voice = voices.find(v => v.name === 'Jorge')
                utterThis.pitch = 1.5
                utterThis.rate = 2
                synth.speak(utterThis)
              }

            </highlight-code>

            <p class="lead">
              More info & slides <a class="font-weight-bold" href="https://github.com/baumannzone/2awesome4u" target="_blank">here</a>.
            </p>

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
      selectedVoiceName: 'Jorge',
      form1: {
        input: ''
      },
      form2: {
        input: '',
        pitch: 1,
        rate: 1
      },
      form3: {
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
        return { value: v.name, text: `${v.name} (${v.lang})`, name: v.name, lang: v.lang }
      })
    },
    demo1 (ev) {
      ev.preventDefault()
      const text = this.form1.input
      const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(text)
      synth.speak(utterThis)
    },
    demo2 (ev) {
      ev.preventDefault()
      const text = this.form2.input
      const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(text)
      utterThis.pitch = this.form2.pitch
      utterThis.rate = this.form2.rate
      synth.speak(utterThis)
    },
    demo3 (ev) {
      ev.preventDefault()
      const text = this.form3.input
      const synth = window.speechSynthesis
      const voice = this.voices.find(v => v.name === this.selectedVoiceName)
      const utterThis = new SpeechSynthesisUtterance(text)
      utterThis.voice = voice
      utterThis.pitch = this.form3.pitch
      utterThis.rate = this.form3.rate
      synth.speak(utterThis)
    }
  }
}
</script>

<style>

</style>
