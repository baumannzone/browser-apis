<template>
  <div class="MainBlock">
    <h1 v-if="title"> {{ title }} </h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: {
      type: String,
      required: false
    }
  }
}
</script>
