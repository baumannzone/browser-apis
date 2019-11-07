<template>
  <ExampleBlock exampleNumber="2">
    <template v-slot:code>
      <div class="data">
        <b-button variant="primary" size="sm" @click="demo2">Get Position</b-button>

        <br>
        <div v-if="isLoading">Loading...</div>

        <div v-if="hasCoords">
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
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        navigator.geolocation
        .getCurrentPosition((position) => {
          const lat = position.coords.latitude
          const long = position.coords.longitude
          const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=1234567890`
          fetch(url)
            .then(response => response.json())
            .then((res) => {
              // Handle response
            })
            }, (error) => {
              // Handle error
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
    hasCoords () { return this.coords2.lat !== '' && this.coords2.long !== '' }
  },
  data () {
    return {
      isLoading: false,
      isGeoAvailable: true,
      coords2: {
        lat: '',
        long: ''
      },
      response2: null
    }
  },
  methods: {
    demo2 () {
      if ('geolocation' in navigator) {
        this.isLoading = true
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
                this.isLoading = false
                this.response2 = res.results[0]
                console.log('External · Geo API:')
                console.log(res.results[0].formatted)
                console.log(res.results[0].components)
              })
          }, (error) => {
            this.isLoading = false
            console.error(error)
          })
      } else {
        this.isGeoAvailable = false
      }
    }
  }
}
</script>
