<template>
  <nav class="tab-navigation">
    <ul>
      <li v-for="tab in tabs" @click="emitNav(tab[0])" :class="['tab', tab[0] === activeTab ? 'active' : null]">{{ tab[1] }}</li>
    </ul>
  </nav>
</template>

<script>
import { tabs } from '../assets/tabs'

export default {
  name: 'TabNav',
  components: {},
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      tabs: tabs
    }
  },
  methods: {
    emitNav (tab) {
      this.$emit('navigate', tab)
    }
  }
}
</script>

<style>

</style>
