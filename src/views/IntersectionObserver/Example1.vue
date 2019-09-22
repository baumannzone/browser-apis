<template>
  <ExampleBlock exampleNumber="1">
  <template v-slot:code>
    <div class="data">
      <h4>Report when the target element is fully visible inside the box</h4>
      <div class="d-flex justify-content-end">
        <p class="report lead my-4">{{ report }}</p>
      </div>
      <div ref="root" class="root border border-info">
        <small class="my-5 text-center d-block">Scroll down..</small>
        <small class="my-5 text-center d-block">Scroll down..</small>
        <div class="d-flex justify-content-center">
          <div ref="target" class="target"></div>
        </div>
        <small class="my-5 text-center d-block">Scroll up..</small>
        <small class="my-5 text-center d-block">Scroll up..</small>
      </div>
    </div>
  </template>

  <template v-slot:example-code>
    <CodeLang lang="javascript"/>
    <highlight-code lang="javascript">

      const observedTarget = document.querySelector('.target')
      const observedRoot = document.querySelector('.root')

      const callback = (entries) => {
        const [target] = entries

        if (target.isIntersecting) {
          // Is visible
        } else {
          // Is not visible
        }
      }

      const observer = new IntersectionObserver(callback, { root: observedRoot })
      observer.observe(observedTarget)

    </highlight-code>
  </template>
  </ExampleBlock>
</template>

<script>
import ExampleBlock from '@/components/ExampleBlock'
import CodeLang from '@/components/TitleCodeLang'

const options = [
  'Where is the Ball? 🤔',
  'HERE is the ball!'
]

export default {
  name: 'Example1',
  components: {
    CodeLang,
    ExampleBlock
  },
  data () {
    return {
      report: options[0]
    }
  },
  mounted () {
    this.demo1()
  },
  methods: {
    demo1 () {
      const observedTarget = this.$refs.target
      const observedRoot = this.$refs.root

      const callback = (entries) => {
        const [target] = entries

        if (target.isIntersecting) {
          this.report = options[1]
        } else {
          this.report = options[0]
        }
      }

      const observer = new IntersectionObserver(callback, { root: observedRoot })
      observer.observe(observedTarget)
    }
  }
}
</script>

<style lang="stylus">
.root
  border-width 2px
  height: 320px
  overflow-y: auto

.target
  width: 64px
  height: 64px
  border-radius: 50%
  background-color: indianred
  margin: 300px 0

</style>
