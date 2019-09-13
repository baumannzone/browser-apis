<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <b-form @submit="demo1">

        <b-form-group label="Text:" label-for="inputDemo1">
          <b-form-input id="inputDemo1" v-model="form1.input" placeholder="Type something.." autocomplete="off"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" size="sm">Submit</b-button>
      </b-form>
    </template>
    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        const text = 'Hola, soy Jorge Baumann. @baumannzone en twitter'
        const synth = window.speechSynthesis
        const utterThis = new SpeechSynthesisUtterance(text)
        synth.speak(utterThis)
      </highlight-code>
    </template>
  </ExampleBlock>
</template>

<script>
import ExampleBlock from '@/components/ExampleBlock'
import CodeLang from '@/components/TitleCodeLang'

export default {
  name: 'Example1',
  components: {
    CodeLang,
    ExampleBlock
  },
  data () {
    return {
      form1: {
        input: 'Hola, soy Jorge Baumann, @baumannzone en twitter'
      }
    }
  },
  methods: {
    demo1 (ev) {
      ev.preventDefault()
      const text = this.form1.input
      const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(text)
      synth.speak(utterThis)
    }
  }
}
</script>
