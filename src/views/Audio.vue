<template>
  <div class="audio-api">

    <MainBlock title="Audio API 🔊">

      <p class="text-muted lead">
        The Web Audio API provides a powerful system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations and more...
      </p>

      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div class="data">
          <b-button variant="primary" size="sm" @click="demo1">Sound</b-button>

        </div>

        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo1'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo1">
              <highlight-code lang="javascript">
                const ac = new AudioContext()
                const oscillator = ac.createOscillator()
                // Different waves will produce different tones. Standard values are "sine", "square", "sawtooth", "triangle" and "custom".
                oscillator.type = 'sine' // default
                // Connect
                oscillator.connect(ac.destination)
                const time = ac.currentTime
                // Duration
                oscillator.start(time)
                oscillator.stop(time + 2) // 2 seconds

                oscillator.onended = () => {
                  console.log('Stopped!')
                }
              </highlight-code>
            </b-collapse>
          </div>
        </div>
      </b-card>

      <b-card class="mb-5">
        <h4>#2</h4>
        <hr>
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
          <b-button variant="primary" size="sm" @click="demo2">Sound</b-button>

        </div>

        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo2'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo2">
              <highlight-code lang="javascript">
                const ac = new AudioContext()
                const oscillator = ac.createOscillator()
                // Different waves will produce different tones. Standard values are "sine", "square", "sawtooth", "triangle" and "custom".
                oscillator.type = 'sine' // default
                oscillator.connect(ac.destination)
                const time = ac.currentTime
                oscillator.start(time)
                oscillator.stop(time + 2)

                oscillator.onended = () => {
                console.log('Stopped!')
                }
              </highlight-code>
            </b-collapse>
          </div>
        </div>
      </b-card>

    </MainBlock>

  </div>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue'

export default {
  name: 'AudioAPI',
  components: {
    MainBlock
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
  computed: {},
  methods: {
    demo1 () {
      const ac = new AudioContext()
      const oscillator = ac.createOscillator()
      // Different waves will produce different tones. Standard values are "sine", "square", "sawtooth", "triangle" and "custom".
      oscillator.type = 'sine' // default
      oscillator.connect(ac.destination)
      const time = ac.currentTime
      oscillator.start(time)
      oscillator.stop(time + 2)

      oscillator.onended = () => {
        console.log('Stopped!')
      }
    },
    demo2 () {
      const ac = new AudioContext()
      const oscillator = ac.createOscillator()
      oscillator.type = this.selected
      oscillator.frequency.value = this.freq
      oscillator.connect(ac.destination)
      const time = ac.currentTime
      oscillator.start(time)
      oscillator.stop(time + 1)

      oscillator.onended = () => {
        console.log('Stopped!')
      }
    }
  }
}
</script>

<style scoped>

</style>
