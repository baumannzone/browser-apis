<template>
  <div class="notifications-api">

    <MainBlock title="Notifications API">

      <p class="lead text-muted">
        The Notification interface of the Notifications API is used to configure and display notifications to the user.
      </p>

      <b-card class="mb-5">
        <h4>#1</h4>
        <hr>
        <div class="data">
          <b-button variant="primary" size="sm" @click="demo1">Notifications</b-button>
          <p v-if="permission !== null" class="my-2">Permission: <b-badge :variant="variant">{{ permission }}</b-badge></p>
        </div>

        <div class="code">
          <div class="d-flex justify-content-end">
            <b-button v-b-toggle="'demo1'" variant="outline-secondary" size="sm">Code</b-button>
          </div>
          <div class="mt-2">
            <b-collapse id="demo1">
              <highlight-code lang="javascript">
                /**
                * This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time.
                * Try to avoid using it.
                */
                navigator.getBattery()
                .then((battery) => {
                // battery.level · battery.charging · battery.chargingTime · battery.dischargingTime
                battery.addEventListener('chargingchange', (ev) => {
                // Handle values
                })

                battery.addEventListener('levelchange', (ev) => {
                // Handle values
                })
                })
              </highlight-code>
            </b-collapse>
          </div>
        </div>
      </b-card>
    </MainBlock>

  </div>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue'

export default {
  name: 'BatteryAPI',
  components: {
    MainBlock
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
    demo1 () {
      Notification.requestPermission()
        .then((permission) => {
          this.permission = permission
          if (permission === 'granted') {
            const noti = new Notification('😠😠 3. horas. probando', { body: 'Tenía el modo no molestar...🤦‍♂️' })
            console.log(noti)
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
