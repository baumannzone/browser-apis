<template>
  <div class="geolocation-api">

    <MainBlock title="Geolocation API">
      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div class="data">
          <h4>Coordinates</h4>
          <p v-if="isLoading" class="lead">Loading...</p>
          <template v-else>
            datasss
          </template>

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
      position: null,
      isLoading: true
    }
  },
  computed: {},
  created () {
    this.demo1()
  },
  methods: {
    demo1 () {
      if ('geolocation' in navigator) {
        /* geolocalización disponible */
        console.log('Loading position...')
        navigator.geolocation.getCurrentPosition(position => {
          console.log('Position:')
          console.log(position.coords)
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          // output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>'
          const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=8e456d1b8c004a1384e71d9a6c97e94f`
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
        }, error => console.error(error))
      } else {
        console.log('GEO no disponible')
        /* geolocalización NO disponible */
      }
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
