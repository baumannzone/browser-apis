<template>
  <div class="geolocation-api">

    <MainBlock title="Geolocation API">

      <p class="text-muted">
        The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.
      </p>

      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div class="data">
          <b-button variant="primary" size="sm" @click="demo1">Get Position</b-button>

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

          <p class="text-danger my-2" v-if="error !== null">
            {{error}}
          </p>

        </div>

        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo1'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo1">
              <highlight-code lang="javascript">
                if ('geolocation' in navigator) {
                  // geo available
                  navigator.geolocation
                    .getCurrentPosition((position) => {
                      // Position
                      const lat = position.coords.latitude
                      const long = position.coords.longitude
                    }, (error) => {
                    console.error(error)
                    })
                } else {
                // geo not available
                }
              </highlight-code>
            </b-collapse>
          </div>
        </div>
      </b-card>

      <b-card class="mb-5">
        <h4>#2</h4>
        <hr>
        <div class="data">
          <b-button variant="primary" size="sm" @click="demo2">Get Position</b-button>

          <div v-if="hasCoords2">
            <h4 class="mt-2">Position</h4>
            <p class="lead">
              Latitude is: <b-badge>{{ coords2.lat}}</b-badge>
              <br>
              Longitude is: <b-badge>{{ coords2.long}}</b-badge>
            </p>
          </div>
          <div v-if="response2 !== null">
            <p>Country: {{response2.components.country}}</p>
            <p>State: {{response2.components.state}}</p>
            <p>City: {{response2.components.city}}</p>
            <br>
            <p class="text-muted">Formatted: {{ response2.formatted}}</p>
          </div>

          <p v-if="isGeoAvailable === false">
            Geolocation not available
          </p>

        </div>

        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo2'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo2">
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
      isGeoAvailable: true,
      error: null,
      coords: {
        lat: '',
        long: ''
      },
      coords2: {
        lat: '',
        long: ''
      },
      response2: null
    }
  },
  computed: {
    hasCoords () { return this.coords.lat !== '' && this.coords.long !== '' },
    hasCoords2 () { return this.coords2.lat !== '' && this.coords2.long !== '' }
  },
  methods: {
    demo1 () {
      if ('geolocation' in navigator) {
        navigator.geolocation
          .getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const long = position.coords.longitude
            this.coords.lat = lat
            this.coords.long = long
          }, (error) => {
            this.error = {
              code: error.code,
              msg: error.message
            }
            console.error(error)
          })
      } else {
        this.isGeoAvailable = false
      }
    },
    demo2 () {
      if ('geolocation' in navigator) {
        navigator.geolocation
          .getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const long = position.coords.longitude
            this.coords2.lat = lat
            this.coords2.long = long
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=8e456d1b8c004a1384e71d9a6c97e94f`
            fetch(url)
              .then(response => response.json())
              .then((res) => {
                this.response2 = res.results[0]
                console.log('External · Geo API:')
                console.log(res.results[0].formatted)
                console.log(res.results[0].components)
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
