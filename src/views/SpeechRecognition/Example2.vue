<template>
  <ExampleBlock exampleNumber="2">
    <template v-slot:code>
      <b-button variant="primary" size="sm" @click="demo">Start</b-button>
    </template>
    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        const text = 'Hola, soy Jorge Baumann, @baumannzone en twitter. Mi perro se llama Rambo'
        const synth = window.speechSynthesis
        const utterThis = new SpeechSynthesisUtterance(text)
        utterThis.pitch = 1.5
        utterThis.rate = 1.5
        synth.speak(utterThis)
      </highlight-code>
    </template>
  </ExampleBlock>
</template>

<script>
import ExampleBlock from '@/components/ExampleBlock'
import CodeLang from '@/components/TitleCodeLang'

export default {
  name: 'Example2',
  components: {
    ExampleBlock,
    CodeLang
  },
  data () {
    return {
      form2: {
        input: '',
        pitch: 1,
        rate: 1
      }
    }
  },
  methods: {
    demo (ev) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
      // const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

      const colors = [ 'aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow' ]
      // More Info: https://en.wikipedia.org/wiki/JSGF
      const grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

      const recognition = new SpeechRecognition()
      const speechRecognitionList = new SpeechGrammarList()
      speechRecognitionList.addFromString(grammar, 1)
      recognition.grammars = speechRecognitionList
      // recognition.continuous = false;
      recognition.lang = 'en-US'
      recognition.interimResults = false
      recognition.maxAlternatives = 1

      recognition.start()
      console.log('Ready to receive a color command.')

      recognition.onresult = (event) => {
        const color = event.results[0][0].transcript
        console.log('Result received: ' + color)
      }
    }
  }
}
</script>
