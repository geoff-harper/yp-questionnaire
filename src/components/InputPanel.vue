<template>
  <div class="form-panel">
    <h3 class="sub-section__header">{{ title }}</h3>
    <InputCheckbox @change="toggleChild" v-if="options" :inputParams="[safe, options, false]"></InputCheckbox>
    <InputPanel v-for="(node, i) in nodes" :key="i"
      v-if="checked.indexOf(options[i][0]) !== -1"
      @update="emitChecked"
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
      this.emitChecked(elem, this.checked, true)
    },
    emitChecked (elem, value, nodeChanged) {
      if (!this.nodes || nodeChanged) {
        this.$emit('update', elem, [this.checked])
      } else {
        this.$emit('update', elem, [...value, this.checked])
      }
    }
  }
}
</script>
