<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data mb-4">
        <b-button variant="primary" size="sm" @click="demo">Start</b-button>
      </div>
      <template v-if="isRecording">
        <Recording/>
      </template>

      <b-form class="mt-4">
        <b-input-group>
          <b-form-input type="text" v-model="transcript" placeholder="Say something funny"></b-form-input>
          <b-input-group-append>
            <b-button variant="dark" @click="clearInput">Clear</b-button>
          </b-input-group-append>
        </b-input-group>
        <b-form-text>Confidence: {{ confidence }}</b-form-text>
      </b-form>

    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        if ('SpeechRecognition' in window) {
          // speech recognition API supported
        } else {
          // speech recognition API not supported
        }

        const recognition = new SpeechRecognition()

        recognition.onresult = (event) => {
          // What you said
          console.log(event.results[0][0].transcript)
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

export default {
  name: 'Example1',
  components: {
    Recording,
    CodeLang,
    ExampleBlock
  },
  data () {
    return {
      transcript: '',
      confidence: '',
      isRecording: false
    }
  },
  methods: {
    demo (ev) {
      ev.preventDefault()

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()

      recognition.onresult = (event) => {
        this.transcript = event.results[0][0].transcript
        this.confidence = event.results[0][0].confidence
        console.log(event)
        console.log(event.results[0][0].transcript)
      }

      recognition.onstart = () => {
        this.isRecording = true
        console.log('Speech recognition service has started')
      }

      recognition.onend = () => {
        this.isRecording = false
        console.log('Speech recognition service has finished')
      }

      // Start recognition
      recognition.start()
    },
    clearInput () {
      this.transcript = ''
      this.confidence = ''
    }
  }
}
</script>
