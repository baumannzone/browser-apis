<template>
  <div class="vibration-api">

    <MainBlock title="Vibration API">

      <p class="text-muted">
        Most mobile devices include vibration hardware, which lets software code provide physical feedback to the user by causing the device to shake. The Vibration API offers Web apps the ability to access this hardware, if it exists, and does nothing if the device doesn't support it.
      </p>

      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div class="data">
          <b-button variant="primary" size="sm" @click="demo1">Start</b-button>

        </div>

        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo1'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo1">
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
  name: 'VibrationAPI',
  components: {
    MainBlock
  },
  methods: {
    demo1 () {
      if ('vibrate' in navigator) {
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
        navigator.vibrate(400)
        console.log('Brr brr')
      }
    }
  }
}
</script>

<style scoped>

</style>
