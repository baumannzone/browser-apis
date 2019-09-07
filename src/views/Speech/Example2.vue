<template>
  <ExampleBlock exampleNumber="2">
    <template v-slot:code>
      <b-form @submit="demo2">

        <b-form-group label="Text:" label-for="inputDemo2">
          <b-form-input id="inputDemo2" v-model="form2.input" placeholder="Type something cool.." autocomplete="off"></b-form-input>
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
    demo2 (ev) {
      ev.preventDefault()
      const text = this.form2.input
      const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(text)
      utterThis.pitch = this.form2.pitch
      utterThis.rate = this.form2.rate
      synth.speak(utterThis)
    }
  }
}
</script>
