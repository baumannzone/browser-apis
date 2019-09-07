<template>
  <ExampleBlock exampleNumber="1">
    <template v-slot:code>
      <div class="data">
        <b-button variant="primary" size="sm" @click="demo">Notifications</b-button>
        <p v-if="permission !== null" class="my-2">Permission: <b-badge :variant="variant">{{ permission }}</b-badge></p>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        // Ask
        Notification.requestPermission()
          .then((permission) => {
            // granted · denied
            if (permission === 'granted') {
            new Notification('Notification title', { body: 'Notification message not very long' })
          }
        })
      </highlight-code>
    </template>
  </ExampleBlock>
</template>

<script>
import ExampleBlock from '@/components/ExampleBlock'
import CodeLang from '@/components/TitleCodeLang'

export default {
  name: 'Example1',
  components: {
    CodeLang,
    ExampleBlock
  },
  data () {
    return {
      permission: null
    }
  },
  computed: {
    variant () {
      return this.permission === 'denied' ? 'danger' : 'success'
    }
  },
  methods: {
    demo () {
      Notification.requestPermission()
        .then((permission) => {
          this.permission = permission
          if (permission === 'granted') {
            const notification = new Notification('Notification title', { body: 'Notification message not very long' })
            console.log(notification)
          }
        })
    }
  }
}
</script>
