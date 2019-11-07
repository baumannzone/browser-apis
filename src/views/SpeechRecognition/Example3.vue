<template>
  <ExampleBlock exampleNumber="3">
    <template v-slot:code>
      <div class="data mb-4">
        <b-button variant="primary" size="sm" @click="demo">Start</b-button>
      </div>

      <template v-if="isRecording">
        <Recording/>
      </template>

      <b-form class="mt-4">

        <b-form-group label="Lang">
          <b-form-radio v-model="selectedLang" name="some-radios" value="es-ES">Spanish</b-form-radio>
          <b-form-radio v-model="selectedLang" name="some-radios" value="en-US">English</b-form-radio>
        </b-form-group>

        <b-input-group>
          <b-form-input type="text" v-model="transcript" readonly></b-form-input>
          <b-input-group-append>
            <b-button variant="dark" @click="clearInput">Clear</b-button>
          </b-input-group-append>
        </b-input-group>

        <b-form-text>Confidence: {{ confidence }}</b-form-text>
      </b-form>

      <p class="lead text-center my-3 p-3" :class="resultClass"> {{ selectedPhrase.displayText }} </p>

    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        const recognition = new SpeechRecognition()
        // recognition.lang = 'es-ES'
        // recognition.lang = 'en-US'

        // Get some phrase
        const phrase = randomPhrase()

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript

          // Check if it matches
          if (phrase.toLocaleLowerCase() === transcript.toLocaleLowerCase()) {
            // ...
          }
        }

        // Start recognition
        recognition.start()

      </highlight-code>
    </template>

  </ExampleBlock>
</template>

<script>
import ExampleBlock from '@/components/ExampleBlock'
import CodeLang from '@/components/TitleCodeLang'
import Recording from './Recording'

import data from './data'

export default {
  name: 'Example3',
  components: {
    Recording,
    CodeLang,
    ExampleBlock
  },
  data () {
    return {
      transcript: '',
      confidence: '',
      isRecording: false,
      phrases: data.phrases,
      selectedPhrase: {},
      selectedLang: 'es-ES',
      resultClass: ''
    }
  },
  methods: {
    demo () {
      this.clearInput()
      this.selectedPhrase = this.randomPhrase()
      this.resultClass = ''
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()
      const phrase = this.selectedPhrase
      recognition.lang = this.selectedLang

      recognition.onresult = (event) => {
        this.transcript = event.results[0][0].transcript
        this.confidence = event.results[0][0].confidence

        // console.log(phrase.toLocaleLowerCase() === this.transcript.toLocaleLowerCase())

        if (phrase.text.toLocaleLowerCase() === this.transcript.toLocaleLowerCase()) {
          console.log(1, phrase)
          this.resultClass = 'bg-success text-white'
          this.selectedPhrase = `🥳🥳🥳 ${phrase.displayText} 🥳🥳🥳`
        } else {
          console.log(2, phrase)
          this.resultClass = 'bg-danger text-white'
          this.selectedPhrase.displayText = `😒 ${phrase.displayText} 😳😭😭😭`
        }
      }

      recognition.onstart = () => {
        this.isRecording = true
      }
      recognition.onend = () => {
        this.isRecording = false
      }

      recognition.start()
    },
    randomPhrase () {
      const num = Math.floor(Math.random() * this.phrases.length)
      return this.phrases[num]
    },
    clearInput () {
      this.transcript = ''
      this.confidence = ''
    }
  }
}
</script>
