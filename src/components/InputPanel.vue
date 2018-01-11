<template>
  <div class="form-panel">
    <h3 class="section__sub-header">{{ title }}</h3>
    <InputCheckbox @change="toggleChild" v-if="options" :inputParams="[safe, options, false]"></InputCheckbox>
    <InputPanel v-for="(node, i) in nodes" :key="i"
      v-show="checked.indexOf(options[i][0]) !== -1"
      :title="node.title"
      :options="node.options"
      :nodes="node.nodes"
      :safe="options[i][0]"></InputPanel>
  </div>
</template>

<script>
import InputCheckbox from './InputCheckbox'

export default {
  name: 'InputPanel',
  components: {
    InputCheckbox
  },
  props: {
    title: {
      type: String
    },
    safe: {
      type: String
    },
    options: {
      type: Array
    },
    nodes: {
      type: Array
    }
  },
  data () {
    return {
      checked: []
    }
  },
  methods: {
    toggleChild (elem, value) {
      this.checked = value
    }
  }
}
</script>

<style>
.form-panel {
  background-color: rgba(0,0,0,0.06);
  padding: 10px 10px 10px 20px;
}
</style>
