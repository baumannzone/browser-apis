<template>
  <ExampleBlock exampleNumber="1">
  <template v-slot:code>
    <div class="data">
      <h4>Report when the target element is fully visible inside the box</h4>
      <p class="report" ref="report"></p>
      <div ref="root" class="root">
        <div ref="target" class="target">
        </div>
      </div>
    </div>
  </template>

  <template v-slot:example-code>
    <CodeLang lang="javascript"/>
    <highlight-code lang="javascript">

      const observedTarget = document.querySelector('.target')
      const observedRoot = document.querySelector('.root')
      const observerReport = document.querySelector('.root')

      const callback = (entries) => {
        const [target] = entries

        if (target.isIntersecting) {
          observerReport.innerText = 'HERE is the ball!'
        } else {
          observerReport.innerText = 'Where is the ball?'
        }
      }

      const options = { root: observedRoot }

      const observer = new IntersectionObserver(callback, options)

      observer.observe(observedTarget)

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
  computed: {
    chargingTime () {
      let temp = this.battery.chargingTime / 60
      if (temp === Infinity) {
        return temp
      } else {
        return `${temp} min.`
      }
    }
  },
  mounted () {
    this.demo1()
  },
  methods: {
    demo1 () {
      const observedTarget = this.$refs.target
      const observedRoot = this.$refs.root
      const observerReport = this.$refs.report

      const callback = (entries) => {
        const [target] = entries

        if (target.isIntersecting) {
          observerReport.innerText = 'HERE is the ball!'
        } else {
          observerReport.innerText = 'Where is the ball?'
        }
      }

      const options = { root: observedRoot }

      const observer = new IntersectionObserver(callback, options)

      observer.observe(observedTarget)
    }
  },
  beforeRouteLeave (to, from, next) {
    // Clear battery event listeners
    next()
  }
}
</script>

<style type="text/css" media="screen">
.report {
  text-align: right;
}
.root {
  border: solid 2px lightblue;
  height: 320px;
  overflow-y: auto;
}

.target {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: indianred;
  margin: 360px 0;
  margin-left: calc(50% - 32px);
}
</style>
