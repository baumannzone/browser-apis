<template>
  <div class="battery-api">
    <MainBlock title="Battery Status API">
      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div class="data">
          <h4>Battery Manager</h4>
          <ul>
            <li><b-badge>Level</b-badge> · {{ battery.level }} %</li>
            <li><b-badge>Charging</b-badge> · {{ battery.charging ? 'Yes' : 'No'}}</li>
            <li><b-badge>Charging Time</b-badge> · {{ chargingTime }}</li>
            <li><b-badge>Discharging Time</b-badge> · {{ dischargingTime }}</li>
          </ul>

        </div>

        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo1'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo1">
              <highlight-code lang="javascript">
                navigator.getBattery()
                  .then((battery) => {
                    // battery.level · battery.charging · battery.chargingTime · battery.dischargingTime

                    /**
                    * Obsolete
                    * This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time.
                    * Try to avoid using it.
                    */
                    battery.addEventListener('chargingchange', (ev) => {
                      // Handle values
                    })

                    battery.addEventListener('levelchange', (ev) => {
                      // Handle values
                    })
                })
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
        level: null, // Val from 0.0 (empty) to 1.0 (fully)
        charging: null,
        chargingTime: null, // Seconds
        dischargingTime: null // Seconds
      }
    }
  },
  computed: {
    chargingTime () {
      let temp = this.battery.chargingTime / 60
      if (temp === Infinity) {
        return temp
      } else {
        return `${temp} min.`
      }
    },
    dischargingTime () {
      let temp = this.battery.dischargingTime / 60
      if (temp === Infinity) {
        return temp
      } else {
        return `${temp} min.`
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
          console.log('Battery Manager:')
          console.log(battery)

          this.battery.level = battery.level * 100
          this.battery.charging = battery.charging
          this.battery.chargingTime = battery.chargingTime
          this.battery.dischargingTime = battery.dischargingTime

          battery.addEventListener('chargingchange', (ev) => {
            const battery = ev.currentTarget
            this.battery.charging = battery.charging
            console.log(`Battery charging? ${battery.charging ? 'Yes' : 'No'}`)
          })

          battery.addEventListener('levelchange', (ev) => {
            const battery = ev.currentTarget
            this.battery.level = battery.level
            console.log(`Battery Level ${battery.level} %`)
          })
        })
    }
  },
  beforeRouteLeave (to, from, next) {
    // Clear battery event listeners
    next()
  }
}
</script>

<style scoped>

</style>
