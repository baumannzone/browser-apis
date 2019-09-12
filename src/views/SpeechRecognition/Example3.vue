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
        // Streaming results as they are received
        // you can start to render results before the user has stopped talking

        const recognition = new SpeechRecognition()

        // Streaming "Realtime"
        recognition.interimResults = true

        // Max num of possible alternatives
        recognition.maxAlternatives = 10

        recognition.onresult = (event) => {
        // What you said
        console.log(event.results[0][0].transcript)
        }

        recognition.onstart = () => {
        isRecording = true
        console.log('Speech recognition service has started')
        }

        recognition.onend = () => {
        isRecording = false
        console.log('Speech recognition service has finished')
        }

        // ...

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
    demo () {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()

      recognition.interimResults = true
      recognition.maxAlternatives = 10

      recognition.onresult = (event) => {
        console.log(event)
        this.transcript = event.results[0][0].transcript
        this.confidence = event.results[0][0].confidence
      }

      recognition.onnomatch = () => {
        console.log('Speech not recognised')
      }

      recognition.onsoundstart = () => {
        console.log('Some sound is being received')
      }

      recognition.onsoundend = () => {
        console.log('Sound has stopped being received')
      }

      recognition.onstart = () => {
        this.isRecording = true
        console.log('Speech recognition service has started')
      }

      recognition.onend = () => {
        this.isRecording = false
        console.log('Speech recognition service has finished')
      }

      console.log('recognition.lang')
      console.log(recognition.lang)

      recognition.start()
    },
    clearInput () {
      this.transcript = ''
      this.confidence = ''
    }
  }
}
</script>
