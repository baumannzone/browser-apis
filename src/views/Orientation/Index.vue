<template>
  <div class="orientation">

    <MainBlock title="Device Orientation">

      <p class="text-muted lead">
        There are two JavaScript events that handle orientation information. The first one is the <code>DeviceOrientationEvent</code>, which is sent when the accelerometer detects a change to the orientation of the device.
      </p>
      <p class="text-muted lead">
        The second event is the <code>DeviceMotionEvent</code>, which is sent when a change in acceleration was added. It is different from the <code>DeviceOrientationEvent</code> because it is listening for changes in acceleration as opposed to orientation.
      </p>

      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div class="data">
          <div class="orientation">
            <div class="box">
              <div class="ball"></div>
            </div>
          </div>
          <pre v-if="result.x">{{ result.x }}</pre>
          <pre v-if="result.y">{{ result.y }}</pre>
        </div>

        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo1'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo1">
              <highlight-code lang="javascript">

              </highlight-code>
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
  name: 'AudioAPI',
  components: {
    MainBlock
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
    background #35ccc1
    border-radius 100%

</style>
