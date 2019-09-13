<template>
  <ExampleBlock exampleNumber="2">
    <template v-slot:code>
      <div class="data">
        <h5>Video Recorder</h5>
        <div class="d-flex justify-content-end">
          <b-badge v-if="supported" pill variant="success">Supported</b-badge>
          <b-badge v-else pill variant="danger">Not supported</b-badge>
        </div>
        <template v-if="supported">
          <b-button variant="primary" size="sm" @click="start" class="mr-2">Start</b-button>
          <b-button size="sm" @click="stop">Stop</b-button>
          <div v-if="hasVideos">
            <hr>
            <ul class="list-unstyled video-list">
              <li v-for="(item, idx) in videoList" :key="idx" class="video-item mb-3">
                <div class="d-flex justify-content-between bg-light p-2">
                  <video controls muted autoplay :src="item.src">
                    <code>video</code> not supported
                  </video>
                  <div class="d-flex align-items-center">
                    <b-button variant="danger" size="sm" @click="removeItem(idx)">Delete</b-button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
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
  name: 'Example1',
  components: {
    CodeLang,
    ExampleBlock
  },
  data () {
    return {
      supported: false,
      mediaRecorder: undefined,
      chunks: [],
      videoList: []
    }
  },
  created () {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      this.supported = true
      navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then((stream) => {
          console.log(stream)

          this.mediaRecorder = new MediaRecorder(stream)

          this.mediaRecorder.ondataavailable = (e) => {
            this.chunks.push(e.data)
          }

          this.mediaRecorder.onstop = (e) => {
            console.log('recorder stopped')

            const blob = new Blob(this.chunks, { type: 'video/webm' })
            const videoURL = window.URL.createObjectURL(blob)
            this.chunks = []

            this.videoList.push({
              src: videoURL
            })
          }
        })
        .catch((err) => {
          console.log('Err: ' + err)
        })
    } else {
      this.supported = false
    }
  },
  computed: {
    hasVideos () {
      return this.videoList.length > 0
    }
  },
  methods: {
    start () {
      this.mediaRecorder.start()
      console.log(this.mediaRecorder.state)
      console.log('recorder started')
    },
    stop () {
      this.mediaRecorder.stop()
      console.log(this.mediaRecorder.state)
    },
    removeItem (idx) {
      this.videoList.splice(idx, 1)
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
