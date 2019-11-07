<template>
  <ExampleBlock exampleNumber="2">
    <template v-slot:code>
      <div class="data">
        <b-button variant="primary" size="sm" @click="demo" class="mr-2">Start</b-button>
        <b-button variant="secondary" size="sm" @click="stop">Stop</b-button>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        // This vibrates the device for 2 seconds,
        // then pauses for 200 ms before vibrating the device again for another 2 seconds.
        navigator.vibrate([2000, 200, 2000])
      </highlight-code>

      <highlight-code lang="javascript">
        // Cancel any existing vibrations
        navigator.vibrate(0);
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
  methods: {
    demo () {
      if ('vibrate' in navigator) {
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
        navigator.vibrate([2000, 200, 2000])
        console.log('Brr brr')
      }
    },
    stop () {
      if ('vibrate' in navigator) {
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
        navigator.vibrate(0)
      }
    }
  }
}
</script>
