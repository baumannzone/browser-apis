<template>
  <div class="geolocation-api">

    <MainBlock title="Geolocation API">
      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div class="data">
          <b-button variant="primary" size="sm" @click="getPosition">Get Position</b-button>

          <div v-if="hasCoords">
            <h4 class="mt-2">Position</h4>
            <p class="lead">
              Latitude is: <b-badge>{{ coords.lat}}</b-badge>
              <br>
              Longitude is: <b-badge>{{ coords.long}}</b-badge>
            </p>

          </div>

          <p v-if="isGeoAvailable === false">
            Geolocation not available
          </p>

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
  name: 'GelocationAPI',
  components: {
    MainBlock
  },
  data () {
    return {
      coords: {
        lat: '',
        long: ''
      },
      isGeoAvailable: true
    }
  },
  computed: {
    hasCoords () {
      return this.coords.lat !== '' && this.coords.long !== ''
    }
  },
  methods: {
    getPosition () {
      if ('geolocation' in navigator) {
        navigator.geolocation
          .getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const long = position.coords.longitude
            this.coords.lat = lat
            this.coords.long = long
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=8e456d1b8c004a1384e71d9a6c97e94f`
            fetch(url)
              .then(response => response.json())
              .then((res) => {
                console.log('External · Geo API:')
                console.log(res.results[0].formatted)
                console.log(res.results[0].components)
              // console.log(res.results[0].components.country)
              // console.log(res.results[0].components.state)
              // console.log(res.results[0].components.county)
              // console.log(res.results[0].components.city)
              })
          }, (error) => {
            console.error(error)
          })
      } else {
        this.isGeoAvailable = false
      }
    }
  }
}
</script>

<style scoped>

</style>
