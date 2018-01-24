<template>
  <div class="form-panel__sub-sub-vertical">
    <h3 class="sub-section__header">{{ en ? subVertical.en_title : subVertical.fr_title }}</h3>
    <div v-for="subOption of subVertical.subOptions">
      <InputCheckbox @change="emitFieldData" :inputParams="[subOption.safe, subOption.options, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">{{ subOption.en_label }}</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">{{ subOption.fr_label }}</p>
        </div>
      </InputCheckbox>
    </div>
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
    subVertical: { type: Object },
    en: { required: true, type: Boolean }
  },
  data () {
    return {}
  },
  methods: {
    emitFieldData (elem, value) {
      this.$emit('change', this.subVertical.safe, elem, value)
    }
  }
}
</script>
