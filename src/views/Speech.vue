<template>
  <div class="speech">
    <MainBlock title="Speech synthesis">
      <p class="text-muted lead text-center">aka text-to-speech</p>
      <hr>
      <div>
        <h4>#1</h4>
        <b-form @submit="demo1">

          <b-form-group label="Text:" label-for="inputDemo1">
            <b-form-input id="inputDemo1" v-model="inputDemo1" placeholder="Type something.."></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        <hr>
      </div>

    </MainBlock>
  </div>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue'

export default {
  name: 'Speech',
  components: {
    MainBlock
  },
  data () {
    return {
      inputDemo1: '',
      showDemo1: false
    }
  },
  methods: {
    demo1 (ev) {
      ev.preventDefault()
      const text = this.inputDemo1
      const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(text)
      synth.speak(utterThis)
    }
  }
}
</script>

<style>

</style>
