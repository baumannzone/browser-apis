<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data">
        <b-form>
          <b-form-group label="Type:">
            <b-form-radio-group id="types" v-model="selected" :options="options" name="radio-options"></b-form-radio-group>
          </b-form-group>
          <b-form-group label="Frequency:">
            <b-form-input id="range-1" v-model="freq" type="range" min="200" max="2000" step="100"></b-form-input>
            <div class="">Freq: <b-badge variant="info">{{ freq }}</b-badge></div>
          </b-form-group>
        </b-form>
        <b-button variant="primary" size="sm" @click="demo">Sound</b-button>
      </div>

    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        const ac = new AudioContext()
        const oscillator = ac.createOscillator()

        // Different waves will produce different tones.
        // Standard values are "sine", "square", "sawtooth", "triangle" and "custom".
        oscillator.type = 'square'
        oscillator.frequency.value = 800
        oscillator.connect(ac.destination)

        // Duration (2s)
        const time = ac.currentTime
        oscillator.start(time)
        oscillator.stop(time + 2)

        oscillator.onended = () => {
          console.log('Stopped!')
        }
      </highlight-code>
    </template>

    <template v-slot:extra-code>
      <hr class="my-5">
      <h5>Waves:</h5>
      <img src="/img/waves.png" alt="waves" class="img-fluid img-thumbnail mx-auto d-block">
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
      selected: 'sine',
      options: [
        { value: 'sine', text: 'sine' },
        { value: 'square', text: 'square' },
        { value: 'sawtooth', text: 'sawtooth' },
        { value: 'triangle', text: 'triangle' }
      ],
      freq: 400
    }
  },
  methods: {
    demo () {
      const ac = new AudioContext()
      const oscillator = ac.createOscillator()
      oscillator.type = this.selected
      oscillator.frequency.value = this.freq
      oscillator.connect(ac.destination)
      const time = ac.currentTime
      oscillator.start(time)
      oscillator.stop(time + 1)
    }
  }
}
</script>
