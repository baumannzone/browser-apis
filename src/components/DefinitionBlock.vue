<template>
  <div class="definition">
    <p class="lead text-muted">
      The Web Speech API provides two distinct areas of functionality: Speech recognition and Speech synthesis which
      open up interesting new possibilities for accessibility
    </p>

    <p class="lead text-muted">
      Speech Synthesis or text to voice allow us convert text to voice and playing it out of a device's speaker in
      multiple languages
    </p>
  </div>
</template>

<script>
export default {
  name: 'DefinitionBlock',
  props: {
    description: {
      type: Array || String,
      required: true
    }
  },
  computed: {
    isArray () {
      return this.description
    }
  }
}
</script>
