<template>
  <ExampleBlock exampleNumber="3">
    <template v-slot:code>
      <b-form @submit="demo3">

        <b-form-group label="Text:" label-for="inputDemo3">
          <b-form-input id="inputDemo3" v-model="form3.input" placeholder="🦄 Type something awesome.." autocomplete="off"></b-form-input>
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
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
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
    </template>

    <template v-slot:extra-code>
      <p>
        More info & slides <a class="font-weight-bold" href="https://github.com/baumannzone/2awesome4u" target="_blank">here</a>.
      </p>
    </template>
  </ExampleBlock>
</template>

<script>
import ExampleBlock from '@/components/ExampleBlock'
import CodeLang from '@/components/TitleCodeLang'

export default {
  name: 'Example3',
  components: {
    ExampleBlock,
    CodeLang
  },
  data () {
    return {
      voices: [],
      voiceNames: [],
      selectedVoiceName: 'Jorge',
      form3: {
        input: 'Y además... ¿Sabías que tiene un canal de youtube? 🙀🤡🥳',
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
      console.table(this.voices)
      this.voiceNames = this.voices.map((v) => {
        return { value: v.name, text: `${v.name} (${v.lang})`, name: v.name, lang: v.lang }
      })
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
