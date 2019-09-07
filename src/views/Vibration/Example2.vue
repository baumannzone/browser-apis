<template>
  <ExampleBlock exampleNumber="2">
    <template v-slot:code>
      <div class="data">
        <b-button variant="primary" size="sm" @click="demo">Start</b-button>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        // This vibrates the device for 200 ms,
        // then pauses for 200 ms before vibrating the device again for another 200 ms.
        navigator.vibrate([200, 200, 200])
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
        navigator.vibrate([200, 200, 200])
        console.log('Brr brr')
      }
    }
  }
}
</script>
