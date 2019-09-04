<template>
  <div class="media-recorder-api">

    <MainBlock title="Media Recorder API">

      <p class="text-muted lead">
        The Web Bluetooth API provides the ability to connect and interact with Bluetooth peripherals.
      </p>

      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div class="data">
          <b-button variant="primary" size="sm" @click="demo1">(Try) Connect</b-button>
          <pre v-if="name" class="mt-2">{{ name }}</pre>
        </div>

        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo1'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo1">
              <highlight-code lang="javascript">

              </highlight-code>

              <hr>

              <h5>Bluetooth Data:</h5>
              <img src="/img/bt.jpeg" alt="bluetooth" class="img-fluid img-thumbnail mx-auto d-block">
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
  name: 'MediaRecorder',
  components: {
    MainBlock
  },
  methods: {
    stop () {

    }
    /* <!DOCTYPE html>
        <html>
        <head>
        <title>demo</title>
        </head>
        <body>
        <div>
        <button id="btn">Stop</button>
          </div>
          <script type="text/javascript">
        const opts = { video: true, audio: true }
        const chunks = []
        const btn = document.getElementById('btn')

        btn.addEventListener('click', function () )

        window.navigator.mediaDevices
          .getUserMedia(opts)
          .then((stream) => {
            console.log(stream)

            const recorder = new window.MediaRecorder(stream)

            recorder.ondataavailable = (e) => {
              chunks.push(e.data)
            }

            recorder.onstop = (e) => {
              URL.createObjectURL( new window.Blob( chunks, { type: "video/webm" } ) )
            }

          })
        */
  }
}
</script>

<!--

// https://slides.com/cassiecodes/deck-4-5#/102

// https://github.com/arnellebalane/shape-detection-api-demo

// https://paul.kinlan.me/face-detection/

-->
