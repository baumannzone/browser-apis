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
          <b-button variant="primary" size="sm" @click="demo1" class="mb-2">Share</b-button>
          <p v-if="message">{{ message }}</p>
          <p v-if="error">{{ error }}</p>
        </div>

        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo2'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo2">
              <highlight-code lang="javascript">
                if (navigator.share) {
                  const data = {
                    title: 'Baumannzone',
                    text: '#io19Extended Hey, look at this awesome twitter guy! 🙊',
                    url: 'https://twitter.com/baumannzone'
                  }
                  navigator.share(data)
                    .then(() => {
                      this.message = 'Successful share'
                    })
                    .catch((error) => {
                      console.log('Error sharing', error)
                    })
                }
              </highlight-code>

              <hr>

              <p>Twitter link <a href="https://twitter.com/baumannzone/status/1125746579837734912" target="_blank">demo</a></p>

              <hr>

              <img src="/img/share.png" class="img-thumbnail img-fluid mx-auto d-block" alt="share" width="350px">
              <br>
              <img src="/img/telegram-share.png" class="img-thumbnail img-fluid mx-auto d-block" alt="telegram-share" width="350px">
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
      this.message = ''
      if (navigator.share) {
        const data = {
          title: 'Baumannzone',
          text: '#io19Extended Hey, look at this awesome twitter guy! 🙊 #demo',
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
        this.error = 'You can not share! 😭️ · Check with your phone'
      }
    }
  }
}
</script>

<style>

</style>
