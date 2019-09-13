<template>
  <div class="face-detector">

    <MainBlock title="Shape Detection API" subtitle="aka Face Detector API">

      <DefinitionBlock :description="description"/>

        <Example1 />

    </MainBlock>
  </div>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue'
import DefinitionBlock from '@/components/DefinitionBlock'

import Example1 from './Example1'

import data from './data'

export default {
  name: 'FaceDetector',
  components: {
    DefinitionBlock,
    MainBlock,
    Example1
  },
  data () {
    return {
      description: data.description
    }
  }
}
</script>
