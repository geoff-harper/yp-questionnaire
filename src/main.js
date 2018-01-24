// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Questionnaire from './Questionnaire'

Vue.config.productionTip = false

window.en = document.documentElement.lang === 'en'

/* eslint-disable no-new */
new Vue({
  el: '#questionnaire',
  template: '<Questionnaire/>',
  components: { Questionnaire }
})
