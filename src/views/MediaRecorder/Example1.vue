<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data">
        <h5>Audio Recorder</h5>
        <div class="d-flex justify-content-end">
          <b-badge v-if="supported" pill variant="success">Supported</b-badge>
          <b-badge v-else pill variant="danger">Not supported</b-badge>
        </div>
        <template v-if="supported">
          <b-button variant="primary" size="sm" @click="start" class="mr-2">Start</b-button>
          <b-button size="sm" @click="stop">Stop</b-button>
          <div v-if="hasAudios">
            <hr>
            <ul class="list-unstyled audio-list">
              <li v-for="(item, idx) in audioList" :key="idx" class="audio-item mb-3">
                <div class="d-flex justify-content-end">
                  <audio controls :src="item.src" class="mr-2"></audio>
                  <b-button variant="danger" size="sm" @click="removeItem(idx)">Delete</b-button>
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
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // Supported
        } else {
          // Not supported
        }

        // Asking for audio only (mic)
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then((stream) => {
            // stream
          })
          .catch((err) => {
            // err
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
      supported: false,
      mediaRecorder: undefined,
      chunks: [],
      audioList: []
    }
  },
  created () {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      this.supported = true
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          console.log(stream)
          this.mediaRecorder = new MediaRecorder(stream)

          this.mediaRecorder.ondataavailable = (e) => {
            this.chunks.push(e.data)
          }

          this.mediaRecorder.onstop = (e) => {
            console.log('recorder stopped')

            var blob = new Blob(this.chunks, { 'type': 'audio/ogg; codecs=opus' })
            this.chunks = []
            const audioURL = window.URL.createObjectURL(blob)

            this.audioList.push({
              src: audioURL
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
    hasAudios () {
      return this.audioList.length > 0
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
      this.audioList.splice(idx, 1)
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
