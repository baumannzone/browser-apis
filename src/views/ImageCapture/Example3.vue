<template>
  <ExampleBlock exampleNumber="3">
    <template v-slot:code>
      <div class="data">
        <h5>Real Time</h5>
        <div class="d-flex justify-content-end">
          <b-badge v-if="supported" pill variant="success">Supported</b-badge>
          <b-badge v-else pill variant="danger">Not supported</b-badge>
        </div>
        <template v-if="supported">
          <video autoplay ref="player"></video>
        </template>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
          .then((stream) => {
            // Get video element in DOM
            videoElement.srcObject = stream
          })
      </highlight-code>
    </template>
  </ExampleBlock>
</template>

<script>
import ExampleBlock from '@/components/ExampleBlock'
import CodeLang from '@/components/TitleCodeLang'

export default {
  name: 'Example3',
  components: {
    CodeLang,
    ExampleBlock
  },
  data () {
    return {
      supported: false,
      mediaRecorder: undefined,
      inputVideo: undefined
    }
  },
  created () {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      this.supported = true
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then((stream) => {
          console.log(this.$refs.player)
          this.$refs.player.srcObject = stream
        })
        .catch((err) => {
          console.log('Err: ' + err)
        })
    } else {
      this.supported = false
    }
  },
  computed: {

  },
  methods: {
    start () {
      // this.mediaRecorder.start()
    },
    stop () {
      // this.mediaRecorder.stop()
    }
  }
}
</script>

<style lang="stylus">
.video-list
  .video-item
    video
      width 200px
</style>
