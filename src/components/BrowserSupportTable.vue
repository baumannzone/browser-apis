<template>
  <div class="component browser-support-table">
  <h3>Browser support</h3>
  <p>For detailed support information, please refer to <a :href="`https://caniuse.com/#feat=${apiName}`" target="_blank" class="badge badge-info">caniuse.com</a>

  <h5>Desktop</h5>
  <div class="browser-list desktop-browsers">
    <BrowserCard v-for="(browser, idx) in desktopBrowsersData" :name="browser.name" :versions="browser.versions" :key="idx" />
  </div>

  <h5>Mobile</h5>
  <div class="browser-list mobile-browsers">
    <BrowserCard v-for="(browser, idx) in mobileBrowsersData" :name="browser.name" :versions="browser.versions" :key="idx" />
  </div>

  </div>
</template>

<script>
import BrowserCard from './BrowserCard.vue'
const caniuse = require('caniuse-api')

export default {
  name: 'BrowserSupportTable',
  components: {
    BrowserCard
  },
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

<style lang='css'>

.browser-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
  margin-bottom: 4em;
}

</style>
