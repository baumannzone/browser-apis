<template>
  <div class="MainBlock">
    <h1 class="text-center" v-if="title"> {{ title }} </h1>
    <h3 class="text-center" v-if="subtitle"> {{ subtitle }}</h3>
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
    },
    subtitle: {
      type: String,
      required: false
    }
  }
}
</script>
