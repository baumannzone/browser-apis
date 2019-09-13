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
        // Audio & Video
        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
          .then((stream) => {
            // stream

            mediaRecorder = new MediaRecorder(stream)

            // Save chunks
            mediaRecorder.ondataavailable = (e) => {
              chunks.push(e.data)
            }

            mediaRecorder.onstop = (e) => {
              // Process chunks
              const blob = new Blob(chunks, { type: 'video/webm' })
              const videoURL = window.URL.createObjectURL(blob)
            }

          })

      </highlight-code>

      <highlight-code>
        mediaRecorder.start()
        mediaRecorder.stop()
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
          // this.inputVideo = new MediaStream(stream)
          // this.mediaRecorder = new MediaRecorder(stream)

          // this.mediaRecorder.ondataavailable = (e) => {
          //   this.chunks.push(e.data)
          // }

          // this.mediaRecorder.onstop = (e) => {
          //   console.log('recorder stopped')
          //
          //   const blob = new Blob(this.chunks, { type: 'video/webm' })
          //   const videoURL = window.URL.createObjectURL(blob)
          //   this.chunks = []
          //
          //   this.videoList.push({
          //     src: videoURL
          //   })
          // }
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
