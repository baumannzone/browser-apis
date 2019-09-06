<template>
  <b-card class="mb-5 full-example">
    <h4>#{{ exampleNumber }}</h4>

    <div class="running-code">
      <slot name="code"></slot>
    </div>

    <div class="example-code">
      <hr>
      <div class="d-flex justify-content-end">
        <b-button v-b-toggle="'demo'+exampleNumber" variant="outline-secondary" size="sm">Code</b-button>
      </div>
      <div class="mt-2">
        <b-collapse :id="'demo'+exampleNumber">
          <highlight-code lang="javascript">
            <slot name="example-code"></slot>
          </highlight-code>
        </b-collapse>
      </div>
    </div>

    <div class="extra-code">
      <slot name="extra-code"></slot>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'ExampleBlock',
  props: {
    exampleNumber: {
      required: true,
      type: String
    }
  }
}
</script>
