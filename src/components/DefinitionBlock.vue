<template>
  <div class="definition">
    <template v-if="description && descriptionIsArray">
      <p class="lead text-muted" v-for="(desc, idx) in description" :key="idx" v-html="desc"></p>
    </template>
    <template v-else-if="description && descriptionIsString">
      <p class="lead text-muted" v-html="description"></p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'DefinitionBlock',
  props: {
    description: {
      type: [Array, String],
      required: true
    }
  },
  computed: {
    descriptionIsArray () {
      return Array.isArray(this.description)
    },
    descriptionIsString () {
      return typeof this.description === 'string'
    }
  }
}
</script>
