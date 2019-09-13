<template>
  <ExampleBlock exampleNumber="2">
    <template v-slot:code>
      <div class="data">
        <div class="mb-4">
          <b-button variant="primary" size="sm" @click="video" class="mr-2">Video</b-button>
          <b-button variant="outline-primary" size="sm" @click="takePhoto" v-if="showImgButton">Capture Photo</b-button>
        </div>

        <b-row>
          <b-col cols="12" sm="6">
            <video autoplay ref="player" width="100%"></video>
          </b-col>
          <b-col cols="12" sm="6">
            <div v-if="showImage">
              <img :src="srcImage" alt="img" width="100%">
              <div class="d-flex justify-content-end">
                <b-button variant="danger" @click="deleteImg" class="my-2">Delete</b-button>
              </div>
            </div>
          </b-col>
        </b-row>

      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            // Show video in realtime
            videoPlayer.srcObject = stream

            // Reference stream for use it later
            stream = stream
          })
      </highlight-code>

      <highlight-code lang="javascript">
        // Our stream from above
        const track = stream.getVideoTracks()[0]
        const imageCapture = new ImageCapture(track)
        imageCapture.takePhoto()
          .then((blob) => {
            // A Blob object represents a file-like object of immutable, raw data;
            // Can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.
            // Blobs can represent data that isn't necessarily in a JavaScript-native format.
            srcImage = window.URL.createObjectURL(blob)
            window.URL.revokeObjectURL(blob)
          })
      </highlight-code>
    </template>
  </ExampleBlock>
</template>

<script>
import ExampleBlock from '@/components/ExampleBlock'
import CodeLang from '@/components/TitleCodeLang'

export default {
  name: 'Example2',
  components: {
    CodeLang,
    ExampleBlock
  },
  data () {
    return {
      showImage: false,
      srcImage: undefined,
      srcVideo: undefined,
      stream: undefined,
      showImgButton: false
    }
  },
  methods: {
    video () {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          this.$refs.player.srcObject = stream
          this.stream = stream
          this.showImgButton = true
        })
        .catch((err) => {
          console.log('Err: ' + err)
        })
    },
    takePhoto () {
      const track = this.stream.getVideoTracks()[0]
      const imageCapture = new ImageCapture(track)
      imageCapture.takePhoto()
        .then(blob => {
          this.srcImage = window.URL.createObjectURL(blob)
          this.showImage = true
          window.URL.revokeObjectURL(blob)
        })
    },
    deleteImg () {
      this.showImage = false
      this.srcImage = undefined
    }
  }
}
</script>
