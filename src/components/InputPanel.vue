<template>
  <div class="form-panel__sub-sub-vertical">
    <h3 class="sub-section__header">{{ subVertical.en_title }}</h3>
    <div v-for="subOption of subVertical.subOptions">
      <InputCheckbox @change="emitFieldData" :inputParams="[subOption.safe, subOption.options, false]">
        <div slot="en">
          <p class="form-field__question">{{ subOption.en_label }}</p>
        </div>
      </InputCheckbox>
    </div>
  </div>
</template>

<script>
import InputCheckbox from './InputCheckbox'

export default {
  name: 'InputPanelLow',
  components: {
    InputCheckbox
  },
  props: {
    subVertical: { type: Object }
  },
  data () {
    return {}
  },
  methods: {
    emitFieldData (elem, value) {
      console.log(value)
    }
  }
}
</script>
