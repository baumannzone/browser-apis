<template>
  <div class="speech">
    <!-- Sintesis de voz -->
    <MainBlock title="Speech Synthesis" subtitle="aka Text-To-Speech">

      <DefinitionBlock :description="description"/>

      <Example1 />

      <Example2 />

      <Example3 />

    </MainBlock>
  </div>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue'
import DefinitionBlock from '@/components/DefinitionBlock'

import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'

import data from './data'

export default {
  name: 'Speech',
  components: {
    DefinitionBlock,
    MainBlock,
    Example1,
    Example2,
    Example3
  },
  data () {
    return {
      description: data.description
    }
  }
}
</script>
