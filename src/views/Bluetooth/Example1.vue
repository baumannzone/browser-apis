<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data">
        <b-button variant="primary" size="sm" @click="demo">Search</b-button>
        <pre v-if="name" class="mt-2">{{ name }}</pre>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
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
    </template>

    <template v-slot:extra-code>
      <hr class="my-5">
      <h5>Bluetooth Data:</h5>
      <img src="/img/bt.jpeg" alt="bluetooth" class="img-fluid img-thumbnail mx-auto d-block">
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
      name: ''
    }
  },
  methods: {
    demo () {
      const opts = {
        filters: [
          { name: 'MI' },
          { services: ['battery_service'] }
        ]
      }

      // filters: [{ name: 'MI' }],
      // filters: [{ services: ['battery_service'] }]
      // filters: [{
      //   services: ['battery_service']
      // }]

      // return navigator.bluetooth.requestDevice({ filters: [{ name: 'My Myo' }, { services: ['battery_service'] }] })
      //   .then(device => {
      //     return device.gatt.connect()
      //   })
      //   .then(server => {
      //     return server.getPrimaryService('battery_service')
      //   })
      //   .then(service => {
      //     return service.getCharacteristic('battery_level')
      //   })
      //   .then(characteristic => {
      //     return characteristic.readValue()
      //   })
      //   .then(value => {
      //     console.log(value.getUint8(0))
      //   })
      //   .catch(error => { console.log('error: ', error) })

      // Error: NotFoundError: No Services matching UUID 0000180f-0000-1000-8000-00805f9b34fb found in Device.

      navigator.bluetooth.requestDevice(opts)
        .then((device) => {
          console.debug(1)
          console.log('Name: ' + device.name)
          console.log(device)
          this.name = `Name: ${device.name}`
          return device.gatt.connect()
        })
        .then(server => {
          console.debug(2)
          // Getting Battery Service...
          console.log('Server: ')
          console.log(server)
          return server.getPrimaryService('battery_service')
        })
        .then(service => {
          console.debug(3)
          console.log('Service: ')
          console.log(service)
          // Getting Battery Level Characteristic...
          return service.getCharacteristic('battery_level')
        })
        .then(characteristic => {
          console.debug(4)
          // Reading Battery Level...
          console.log('Characteristic: ')
          console.log(characteristic)
          return characteristic.readValue()
        })
        .then(value => {
          console.debug(5)
          console.log('Battery percentage is ' + value.getUint8(0))
        })
        .catch((error) => {
          console.log('Error:')
          console.log(error)
          this.name = `Error: ${error}`
        })
    }
  }
}
</script>
