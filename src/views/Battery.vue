<template>
  <div class="battery-api">
    <MainBlock title="Battery Status API">
      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div v-for="(val, key) in battery">
          <pre :key="key">{{ key }}: {{ val }}</pre>
        </div>
        <div class="data">
          <i class="fas fa-battery-full"></i>
        </div>
        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo1'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo1">
              <highlight-code lang="javascript">
                const text = 'Hola, soy Jorge Baumann'
                const synth = window.speechSynthesis
                const utterThis = new SpeechSynthesisUtterance(text)
                synth.speak(utterThis)
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
  name: 'BatteryAPI',
  components: {
    MainBlock
  },
  data () {
    return {
      battery: {
        charging: null,
        chargingTime: null, // Seconds
        dischargingTime: null, // Seconds
        level: null // Val from 0.0 (empty) to 1.0 (fully)
      }
    }
  },
  created () {
    this.demo1()
  },
  methods: {
    demo1 () {
      navigator.getBattery()
        .then((battery) => {
          // console.log('Battery Manager:')
          // console.table(battery)

          this.battery.level = battery.level * 100
          this.battery.charging = battery.charging
          this.battery.chargingTime = battery.chargingTime
          this.battery.dischargingTime = battery.dischargingTime

          /**
           * Obsolete
           * This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time.
           * Try to avoid using it.
           */
          battery.addEventListener('chargingchange', (ev) => {
            const battery = ev.currentTarget
            console.log(`Battery charging? ${battery.charging}`)
          })

          battery.addEventListener('levelchange', (ev) => {
            const battery = ev.currentTarget
            console.log(`Battery Level ${battery.level}`)
          })

        })
    },
    onchargingchange (battery) {
      if (battery.charging) {
        console.log('Battery is charging')
      }
    },
    onlevelchange (battery) {
      console.log('Battery status: ' + battery.level * 100 + ' %')
    }
  }
}
</script>

<style scoped>

</style>
