<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data">
        <div class="orientation">
          <div class="box">
            <div class="ball"></div>
          </div>
        </div>
        <pre v-if="result.x">{{ result.x }}</pre>
        <pre v-if="result.y">{{ result.y }}</pre>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        window.addEventListener('deviceorientation', handleOrientation)
      </highlight-code>

      <highlight-code lang="javascript">
        handleOrientation (event) {
          let x = event.beta // In degree in the range [-180,180]
          let y = event.gamma // In degree in the range [-90,90]

          // Handle data 🔵
        }
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
      result: {}
    }
  },
  created () {
    window.addEventListener('deviceorientation', this.handleOrientation)
  },
  methods: {
    handleOrientation (event) {
      const ball = document.querySelector('.ball')
      const box = document.querySelector('.box')
      const maxX = box.clientWidth - ball.clientWidth
      const maxY = box.clientHeight - ball.clientHeight
      let x = event.beta // In degree in the range [-180,180]
      let y = event.gamma // In degree in the range [-90,90]

      console.log(x, y)

      this.result.x = x
      this.result.y = y

      // We don't want to have the device upside down
      // We constrain the x value to the range [-90,90]
      if (x > 90) {
        x = 90
      }

      if (x < -90) {
        x = -90
      }

      // To make computation easier we shift the range of
      // x and y to [0,180]
      x += 90
      y += 90

      // 10 is half the size of the ball
      // It center the positioning point to the center of the ball
      ball.style.top = (maxX * x / 180 - 10) + 'px'
      ball.style.left = (maxY * y / 180 - 10) + 'px'
    }
  }
}
</script>

<style scoped lang="stylus">
  .box
    position relative
    width 200px
    height 200px
    border 5px solid #ddd
    border-radius 5px

  .ball
    position absolute
    top 90px
    left 90px
    width 20px
    height 20px
    background #4f86cc
    border-radius 100%

</style>
