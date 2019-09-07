<template>
  <div class="battery-api">

    <MainBlock title="Battery Status API">

      <DefinitionBlock :description="description"/>

      <Example1/>

    </MainBlock>

  </div>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue'
import DefinitionBlock from '@/components/DefinitionBlock'
import Example1 from './Example1'

import data from './data'

export default {
  name: 'BatteryAPI',
  components: {
    MainBlock,
    DefinitionBlock,
    Example1
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
