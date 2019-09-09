<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data">
        <b-button variant="primary" size="sm" @click="demo">Sound</b-button>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        const ac = new AudioContext()
        const oscillator = ac.createOscillator()

        // Connect
        oscillator.connect(ac.destination)
        const time = ac.currentTime

        // Duration (1s)
        oscillator.start(time)
        oscillator.stop(time + 2)
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
      battery: {
        level: null, // Val from 0.0 (empty) to 1.0 (fully)
        charging: null,
        chargingTime: null, // Seconds
        dischargingTime: null // Seconds
      }
    }
  },
  methods: {
    demo () {
      const ac = new AudioContext()
      const oscillator = ac.createOscillator()
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
