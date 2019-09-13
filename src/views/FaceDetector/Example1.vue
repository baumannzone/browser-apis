<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data">
        <div class="mb-2">
          <b-button variant="primary" size="sm" @click="demo">Check Faces</b-button>
        </div>
        <div id="wrap" class="wrap" ref="wrap">
          <!-- https://unsplash.com/photos/T6zu4jFhVwg -->
          <img src="../../assets/faces.png" alt="img" ref="image">
        </div>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        // Chrome Only
        if (typeof window.FaceDetector === 'undefined') {
          // Nope 😑
        }

        faceDetector.detect(image)
          .then(faces => {
            // Object type "DetectedFace"
            console.log(faces)
          })
          .catch((err) => {
            console.error(err.toString())
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
    }
  },
  methods: {
    demo () {
      if (typeof window.FaceDetector === 'undefined') {
        console.log('No face detection!')
        return
      }

      // Clear face box
      const arrFaces = [...document.getElementsByClassName('face')]
      arrFaces.forEach((face) => {
        face.parentNode.removeChild(face)
      })
      const faceDetector = new window.FaceDetector()

      faceDetector.detect(this.$refs.image)
        .then(faces => {
          console.log(faces)
          faces.forEach((face) => {
            // Face box
            const { width, height, top, left } = face.boundingBox
            const faceBox = document.createElement('div')
            faceBox.classList.add('face')
            faceBox.style.cssText = `
              width: ${width}px;
              height: ${height}px;
              top: ${top}px;
              left: ${left}px;
            `
            this.$refs.wrap.appendChild(faceBox)
            console.log(faceBox)
          })
        })
        .catch((err) => {
          console.error(err.toString())
        })
    }
  }
}
</script>

<style lang="stylus">

.wrap
  position relative

.face
  position absolute
  z-index 1
  border 1px solid white

</style>
