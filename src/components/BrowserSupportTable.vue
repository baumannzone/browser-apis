<template>
  <div class="component browser-support-table">
  <h3>Browser support</h3>
  <table class="table">
   <thead>
    <tr>
      <th v-for="(item, idx) in browserSupportData" v-bind:key="idx">{{item.name}}</th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td v-for="(item, idx) in browserSupportData" v-bind:key="idx">{{item.versions.no}}</td>
     </tr>
     <tr>
       <td v-for="(item, idx) in browserSupportData" v-bind:key="idx">{{item.versions.partial}}</td>
     </tr>
     <tr>
       <td v-for="(item, idx) in browserSupportData" v-bind:key="idx">{{item.versions.full}}</td>
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
        chrome: { name: 'Chrome' },
        edge: { name: 'Edge' },
        firefox: { name: 'Firefox' },
        safari: { name: 'Safari' },
        opera: { name: 'Opera' },
        and_chr: { name: 'Chrome for Android' },
        and_ff: { name: 'Firefox for Android' },
        ios_saf: { name: 'Safari for iOS' },
        ie: { name: 'Internet Explorer' },
        op_mob: { name: 'Mobile Opera' },
        op_mini: { name: 'Opera Mini' },
        baidu: { name: 'Baidu Browser' },
        kaios: { name: 'KaiOS Browser' },
        and_qq: { name: 'QQ Browser' },
        samsung: { name: 'Samsung Browser' },
        and_uc: { name: 'UC Browser' },
        android: { name: 'Android Browser' },
        ie_mob: { name: 'Mobile Edge' }
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
              name: this.getBrowserName(key),
              versions: {
                no: this.browserSupportDataRaw[key].n || null,
                partial: this.browserSupportDataRaw[key].a || null,
                full: this.browserSupportDataRaw[key].y || null
              }
            }
          })
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
    },
    getBrowserName (code) {
      const { name } = this.browsersMap[code]
      return typeof name !== 'undefined' ? name : code
    }
  },
  mounted () {
    this.fetchBrowserSupportData(this.apiName)
  }
}
</script>
