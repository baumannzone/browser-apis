<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data">
        <div class="mb-2">
          <b-button variant="primary" size="sm" @click="demo" class="mr-2">Capture photo</b-button>
        </div>
        <audio id="myVideo" hidden ref="audioPlayer">
          <source src="../../assets/click.mp3" type="audio/mp3">
          Your browser does not support the audio element.
        </audio>
        <div v-if="showImage">
          <a :href="srcImage" title="Download Image">
            <img :src="srcImage" width="400px" alt="img">
          </a>
        </div>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            const track = stream.getVideoTracks()[0]
            const imageCapture = new ImageCapture(track)

            // Capture
            imageCapture.takePhoto()
              .then(blob => {
                // Our image here, easy as f*** 💘
                imageSrc = window.URL.createObjectURL(blob)

                // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
                window.URL.revokeObjectURL(blob)
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
  data () {
    return {
      showImage: false,
      srcImage: undefined
    }
  },
  methods: {
    demo () {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          const track = stream.getVideoTracks()[0]
          const imageCapture = new ImageCapture(track)

          // Capture
          const audio = this.$refs.audioPlayer
          audio.currentTime = 0
          audio.play()
          audio.onended = (event) => {
            imageCapture.takePhoto()
              .then(blob => {
                this.srcImage = window.URL.createObjectURL(blob)
                this.showImage = true
                window.URL.revokeObjectURL(blob)
              })
          }
        })
        .catch((err) => {
          console.log('Err: ' + err)
        })
    }
  }
}
</script>

<style lang="stylus">
.audio-list
  .audio-item
    audio
      width 100%
      height 31px
</style>
