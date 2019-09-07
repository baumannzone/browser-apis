<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data">
        <b-button variant="primary" size="sm" @click="demo" class="mb-2">Share</b-button>
        <p v-if="message">{{ message }}</p>
        <p v-if="error">{{ error }}</p>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        // Website has to be served over HTTPS (or localhost) in order for the API to work
        // The navigator.share method has to be called following a user gesture like a button click.

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
    </template>

    <template v-slot:extra-code>
      <div>
        <hr class="my-5">
        <p class="text-center">Twitter link <a href="https://twitter.com/baumannzone/status/1125746579837734912" target="_blank">demo</a></p>
        <img src="/img/share.png" class="img-thumbnail img-fluid mx-auto d-block" alt="share" width="350px">
        <br>
        <img src="/img/telegram-share.png" class="img-thumbnail img-fluid mx-auto d-block" alt="telegram-share" width="350px">
      </div>
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
      message: '',
      error: ''
    }
  },
  methods: {
    demo () {
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
            console.log('Error sharing:', error)
          })
      } else {
        this.error = 'Nope!'
      }
    }
  }
}
</script>
