<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data">
        <b-button variant="primary" size="sm" @click="demo1">Get Position</b-button>

        <br>
        <div v-if="isLoading">Loading...</div>

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

        <p class="text-danger my-2" v-if="error !== null"> {{error}} </p>

      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
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
    hasCoords () { return this.coords.lat !== '' && this.coords.long !== '' }
  },
  data () {
    return {
      isLoading: false,
      isGeoAvailable: true,
      error: null,
      coords: {
        lat: '',
        long: ''
      }
    }
  },
  methods: {
    demo1 () {
      if ('geolocation' in navigator) {
        this.isLoading = true
        navigator.geolocation
          .getCurrentPosition((position) => {
            this.isLoading = false
            const lat = position.coords.latitude
            const long = position.coords.longitude
            this.coords.lat = lat
            this.coords.long = long
          }, (error) => {
            this.isLoading = false
            this.error = {
              code: error.code,
              msg: error.message
            }
            console.log(error)
          })
      } else {
        this.isGeoAvailable = false
      }
    }
  }
}
</script>
