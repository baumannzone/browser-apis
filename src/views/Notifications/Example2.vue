<template>
  <ExampleBlock exampleNumber="2">
    <template v-slot:code>
      <div class="data">
        <b-button variant="primary" size="sm" @click="demo">Notifications</b-button>
      </div>
    </template>

    <template v-slot:example-code>
      <CodeLang lang="javascript"/>
      <highlight-code lang="javascript">
        const options = {
          body: 'Notification message a little bit longer...',
          icon: 'your-image.png'
        }
        new Notification('My Super Duper Title 🙊', options)
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
  methods: {
    demo () {
      Notification.requestPermission()
        .then((permission) => {
          this.permission = permission
          if (permission === 'granted') {
            const notification = new Notification('My Super Duper Title 🙊', { body: 'Notification message a little bit longer...', icon: '/img/js.png' })
            console.log(notification)
          }
        })
    }
  }
}
</script>
