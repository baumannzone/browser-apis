<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data">
        <h4>Battery Manager</h4>
        <ul>
          <li><b-badge>Level</b-badge> · {{ battery.level }} %</li>
          <li><b-badge>Charging</b-badge> · {{ battery.charging ? 'Yes' : 'No'}}</li>
          <li><b-badge>Charging Time</b-badge> · {{ chargingTime }}</li>
          <li><b-badge>Discharging Time</b-badge> · {{ dischargingTime }}</li>
        </ul>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        /**
        * This feature is obsolete.
        * Although it may still work in some browsers, its use is discouraged since it could be removed at any time.
        */
        navigator.getBattery()
          .then((battery) => {
            // Values:
            // - battery.level
            // - battery.charging

            // Events:
            // - battery.chargingTime
            // - battery.dischargingTime

            battery.addEventListener('chargingchange', (ev) => {
              // Handle values
            })

            battery.addEventListener('levelchange', (ev) => {
              // Handle values
            })
        })
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
            this.battery.level = battery.level * 100
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
