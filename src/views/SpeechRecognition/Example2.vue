<template>
  <ExampleBlock exampleNumber="2">
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
      // const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      // const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
      // // const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent
      //
      // const colors = [ 'aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow' ]
      // // More Info: https://en.wikipedia.org/wiki/JSGF
      // const grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
      //
      // const recognition = new SpeechRecognition()
      // const speechRecognitionList = new SpeechGrammarList()
      // speechRecognitionList.addFromString(grammar, 1)
      // recognition.grammars = speechRecognitionList
      // // recognition.continuous = false;
      // recognition.lang = 'en-US'
      // recognition.interimResults = false
      // recognition.maxAlternatives = 1
      //
      // recognition.start()
      // console.log('Ready to receive a color command.')
      //
      // recognition.onresult = (event) => {
      //   const color = event.results[0][0].transcript
      //   console.log('Result received: ' + color)
      // }

      ev.preventDefault()

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
      const recognition = new SpeechRecognition()

      const colors = [ 'aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow' ]
      // More Info: https://en.wikipedia.org/wiki/JSGF
      const grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

      const speechRecognitionList = new SpeechGrammarList()
      speechRecognitionList.addFromString(grammar, 1)
      recognition.grammars = speechRecognitionList

      recognition.onresult = (event) => {
        // this.transcript = event.results[0][0].transcript
        // this.confidence = event.results[0][0].confidence
        console.log(event)
        console.log(event.results[0][0].transcript)
      }

      recognition.onstart = () => {
        this.isRecording = true
        console.log('Speech recognition service has started')
      }

      recognition.onsoundstart = () => {
        console.log('Some sound is being received')
      }

      recognition.onsoundend = () => {
        console.log('Sound has stopped being received')
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
