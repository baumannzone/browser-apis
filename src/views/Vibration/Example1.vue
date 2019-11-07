<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data">
        <b-button variant="primary" size="sm" @click="demo">Start</b-button>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        /**
        * The vibrate API is only available once the user has started interacting with your page
        * (e.g, by tapping or dragging on the screen).
        * It cannot be used before a user interaction
        * this is to prevent web pages (particularly embedded advertisements!)
        * from attempting to scare the user by making their phone vibrate.
        */
        if ('vibrate' in navigator) {
          navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
          navigator.vibrate(400)
        }
        // Nope. You Can’t Detect A Vibrator™
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
        navigator.vibrate([200])
        console.log('Brr brr')
      }
    }
  }
}
</script>
