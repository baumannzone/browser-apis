<template>
  <div class="bluetooth-api">

    <MainBlock title="Web Bluetooth API">

      <p class="text-muted lead">
        The Web Bluetooth API provides the ability to connect and interact with Bluetooth peripherals.
      </p>

      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div class="data">
          <b-button variant="primary" size="sm" @click="demo1">(Try) Connect</b-button>
          <pre v-if="name" class="mt-2">Name: {{ name }}</pre>
        </div>

        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo1'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo1">
              <highlight-code lang="javascript">
                navigator.bluetooth.requestDevice({ acceptAllDevices: true })
                .then((device) => {
                  console.log('Name: ' + device.name)
                  // device.gatt.connect()
                })
                .catch((error) => {
                  console.log('Something went wrong. ' + error)
                })
              </highlight-code>

              <hr>

              <h5>Bluetooth Data:</h5>
              <img src="/img/bt.jpeg" alt="bluetooth" class="img-fluid img-thumbnail mx-auto d-block">
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
      name: ''
    }
  },
  computed: {},
  methods: {
    demo1 () {
      const all = {
        // acceptAllDevices: true,
        filters: [{ name: 'MI' }],
        optionalServices: ['battery_service']
      }

      navigator.bluetooth.requestDevice(all)
        .then((device) => {
          console.log('Name: ' + device.name)
          console.log(device)
          this.name = device.name
          return device.gatt.connect()
        })
        .then(server => {
          // Getting Battery Service...
          console.log('Server: ')
          console.log(server)
          return server.getPrimaryService('battery_service')
        })
        .then(service => {
          console.log('Service: ')
          console.log(service)
          // Getting Battery Level Characteristic...
          return service.getCharacteristic('battery_level')
        })
        .then(characteristic => {
          // Reading Battery Level...
          console.log('Characteristic: ')
          console.log(characteristic)
          return characteristic.readValue()
        })
        .then(value => {
          console.log('Battery percentage is ' + value.getUint8(0))
        })
        .catch((error) => {
          console.log('Something went wrong >>> ' + error)
          this.name = error
        })
    }
  }
}
</script>

<style scoped>

</style>
