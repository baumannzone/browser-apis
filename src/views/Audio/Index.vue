<template>
  <div class="audio-api">

    <MainBlock title="Audio API 🔊">

      <DefinitionBlock :description="description"/>

      <Example1/>

      <Example2/>

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
  name: 'AudioAPI',
  components: {
    MainBlock,
    DefinitionBlock,
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

<style scoped>

</style>
