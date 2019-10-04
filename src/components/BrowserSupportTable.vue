<template>
  <div class="component browser-support-table">
  <h3>Browser support</h3>

  <h5>Desktop</h5>
  <table class="table desktop-browsers">
   <thead>
    <tr>
      <th v-for="(item, idx) in desktopBrowsersData" v-bind:key="idx" class="text-center">{{item.name}}</th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td v-for="(item, idx) in desktopBrowsersData" v-bind:key="idx" class="bg-danger text-center">{{item.versions.no}}</td>
     </tr>
     <tr>
       <td v-for="(item, idx) in desktopBrowsersData" v-bind:key="idx" class="bg-warning text-center">{{item.versions.partial}}</td>
     </tr>
     <tr>
       <td v-for="(item, idx) in desktopBrowsersData" v-bind:key="idx" class="bg-success text-center">{{item.versions.full}}</td>
     </tr>
   </tbody>
  </table>

  <h5>Mobile</h5>
  <table class="table mobile-browsers">
   <thead>
    <tr>
      <th v-for="(item, idx) in mobileBrowsersData" v-bind:key="idx" class="text-center">{{item.name}}</th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td v-for="(item, idx) in mobileBrowsersData" v-bind:key="idx" class="bg-danger text-center">{{item.versions.no}}</td>
     </tr>
     <tr>
       <td v-for="(item, idx) in mobileBrowsersData" v-bind:key="idx" class="bg-warning text-center">{{item.versions.partial}}</td>
     </tr>
     <tr>
       <td v-for="(item, idx) in mobileBrowsersData" v-bind:key="idx" class="bg-success text-center">{{item.versions.full}}</td>
     </tr>
   </tbody>
  </table>
  </div>
</template>

<script>
const caniuse = require('caniuse-api')

export default {
  name: 'BrowserSupportTable',
  props: {
    apiName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      browserSupportDataRaw: null,
      browsersMap: {
        chrome: { name: 'Chrome', type: 1 },
        edge: { name: 'Edge', type: 1 },
        firefox: { name: 'Firefox', type: 1 },
        safari: { name: 'Safari', type: 1 },
        opera: { name: 'Opera', type: 1 },
        and_chr: { name: 'Chrome for Android', type: 2 },
        and_ff: { name: 'Firefox for Android', type: 2 },
        ios_saf: { name: 'Safari for iOS', type: 2 },
        ie: { name: 'Internet Explorer', type: 1 },
        op_mob: { name: 'Mobile Opera', type: 2 },
        op_mini: { name: 'Opera Mini', type: 2 },
        baidu: { name: 'Baidu Browser', type: 2 },
        kaios: { name: 'KaiOS Browser', type: 2 },
        and_qq: { name: 'QQ Browser', type: 2 },
        samsung: { name: 'Samsung Browser', type: 2 },
        and_uc: { name: 'UC Browser', type: 2 },
        android: { name: 'Android Browser', type: 2 },
        ie_mob: { name: 'Mobile Edge', type: 2 }
      }
    }
  },
  computed: {
    browserSupportData () {
      return this.browserSupportDataRaw == null
        ? []
        : Object.keys(this.browserSupportDataRaw)
          .map((key) => {
            return {
              id: key,
              name: this.browsersMap[key].name,
              type: this.browsersMap[key].type,
              versions: {
                no: this.browserSupportDataRaw[key].n || null,
                partial: this.browserSupportDataRaw[key].a || null,
                full: this.browserSupportDataRaw[key].y || null
              }
            }
          })
    },
    desktopBrowsersData () {
      return this.browserSupportData
        .filter(browser => browser.type === 1)
    },
    mobileBrowsersData () {
      return this.browserSupportData
        .filter(browser => browser.type === 2)
    }
  },
  methods: {
    fetchBrowserSupportData (featureName) {
      try {
        const response = caniuse.getSupport(featureName)
        this.browserSupportDataRaw = response
      } catch (err) {
        console.error(`Failed to fetch browser support data for '${featureName}'.`, err)
      }
    }
  },
  mounted () {
    this.fetchBrowserSupportData(this.apiName)
  }
}
</script>
