<template>
  <div class="intersection-observer-api">

    <MainBlock title="Intersection Observer API">

      <DefinitionBlock :description="description"/>

      <BrowserSupportTable apiName="intersectionobserver" />

      <Example1/>

    </MainBlock>

  </div>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue'
import DefinitionBlock from '@/components/DefinitionBlock'
import BrowserSupportTable from '@/components/BrowserSupportTable'

import Example1 from './Example1'

import data from './data'

export default {
  name: 'IntersectionObserverAPI',
  components: {
    MainBlock,
    DefinitionBlock,
    BrowserSupportTable,
    Example1
  },
  data () {
    return {
      description: data.description
    }
  }
}
</script>
