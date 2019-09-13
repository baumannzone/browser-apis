<template>
  <div class="speech-recognition">

    <MainBlock title="MediaStream Image Capture API">

      <DefinitionBlock :description="description"/>

        <Example1 />

        <Example2 />

    </MainBlock>
  </div>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue'
import DefinitionBlock from '@/components/DefinitionBlock'

import Example1 from './Example1'
import Example2 from './Example2'

import data from './data'

export default {
  name: 'ImageCapture',
  components: {
    DefinitionBlock,
    MainBlock,
    Example1,
    Example2
  },
  data () {
    return {
      description: data.description
    }
  }
}
</script>
