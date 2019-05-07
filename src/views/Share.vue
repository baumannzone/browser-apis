<template>
  <div class="share-api">
    <!-- Sintesis de voz -->
    <MainBlock title="Web Share API">

      <p class="lead text-muted">
        The <code>Navigator.share()</code> method invokes the native sharing mechanism of the device as part of the Web Share API. If the Web Share API is unsupported, then this method will be undefined.
      </p>

      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div class="data">
          <b-button variant="primary" size="sm" @click="demo1">Share</b-button>
          <br>
          <p v-if="message">{{ message }}</p>
        </div>

        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo2'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo2">
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
  name: 'Speech',
  components: {
    MainBlock
  },
  data () {
    return {
      message: '',
      error: ''
    }
  },
  methods: {
    demo1 () {
      console.log('sharing...')
      this.message = ''
      if (navigator.share) {
        const data = {
          title: 'Baumannzone',
          text: 'Hey, look at this awesome twitter guy! 🙊',
          url: 'https://twitter.com/baumannzone'
        }
        navigator.share(data)
          .then(() => {
            this.message = 'Successful share'
            console.log('Successful share')
          })
          .catch((error) => {
            this.message = error
            console.log('Error sharing', error)
          })
      } else {
        this.error = 'You can not share! ☹️'
      }
    }
  }
}
</script>

<style>

</style>
