<template>
  <div class="MainBlock bg-light p-md-5 p-2">
    <h1 v-if="title" class="text-center"> {{ title }} </h1>
    <p v-if="subtitle" class="text-muted lead text-center">{{ subtitle }}</p>
    <hr class="my-5">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MainBlock',
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
