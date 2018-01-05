<template>
  <nav class="button-navigation">
    <button @click="emitNav('prev')" v-show="activeTab !== 'businessDetails'" class="button-navigation__button">Previous</button>
    <button @click="emitNav('next')" class="button-navigation__button">Next</button>
  </nav>
</template>

<script>
import { tabs } from '../assets/tabs'

export default {
  name: 'ButtonNav',
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
    emitNav (direction) {
      let tabCounter = 0

      for (let tab in this.tabs) {
        if (this.tabs[tab][0] === this.activeTab) {
          if (direction === 'next') tabCounter = ++tab
          else tabCounter = --tab

          this.$emit('navigate', this.tabs[tabCounter][0])
          return
        }
      }
    }
  }
}
</script>

<style>

</style>
