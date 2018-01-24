<template>
  <nav :class="['tab-navigation', !en ? 'fr' : null]">
    <ul>
      <li v-for="tab in tabs" @click="emitNav(tab[0])" :class="['tab', tab[0] === activeTab ? 'active' : null]">{{ en ? tab[1] : tab[2] }}</li>
    </ul>
  </nav>
</template>

<script>
import { tabs } from '../assets/tabs'

export default {
  name: 'TabNav',
  components: {},
  props: {
    activeTab: { required: true, type: String }
  },
  data () {
    return {
      tabs: tabs
    }
  },
  computed: {
    en () {
      return document.documentElement.lang === 'en'
    }
  },
  methods: {
    emitNav (tab) {
      this.$emit('navigate', tab)
      window.ga('send', 'event', 'Navigation', 'Tab')
    }
  }
}
</script>
