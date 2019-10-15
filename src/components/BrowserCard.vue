<template>
  <div class="browser-card" :class="versionTag.class" data-toggle="tooltip" :title="versionTag.tooltip">
    <span>{{ name }}</span>
    <span>{{ versionTag.version }}</span>
  </div>
</template>
<script>
export default {
  name: 'BrowserCard',
  props: {
    name: {
      required: true,
      type: String
    },
    versions: {
      required: true,
      type: Object
    }
  },
  computed: {
    versionTag () {
      const { full, partial, no } = this.versions
      if (full !== null) return { class: 'full-support', tooltip: `Full support from v. ${full}`, version: full }
      if (partial !== null) return { class: 'partial-support', tooltip: `Partial support from v. ${partial}`, version: partial }
      return { class: 'no-support', tooltip: 'No support', version: no }
    }
  }
}
</script>

<style lang="css">
  .browser-card {
    width: 100px;
    height: 100px;
    margin: 6px;
    display: flex;
    cursor: help;
    border-radius: .25em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 300;
    text-align: center;
    padding: .5em;
  }
  .full-support {
    background-color: #39b54a;
  }
  .partial-support {
    background-color: #A8BD04;
  }
  .no-support {
    background-color: #c44230;
  }

</style>
