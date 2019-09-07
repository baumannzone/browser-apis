<template>
  <span class="lang">{{ lang }}</span>
</template>
<script>
export default {
  name: 'CodeLang',
  props: {
    lang: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="stylus">
  .lang
    display inline-block
    padding 1px 10px
    background-color #F0F0F0
    color: #8e8e8e
    font-weight 500
    font-size 14px
    font-style italic
    border-top-left-radius 5px
    border-top-right-radius 5px
</style>
