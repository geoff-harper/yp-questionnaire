<template>
  <div class="form-field__radio-container">
    <slot v-if="en" name="en"></slot>
    <slot v-if="!en" name="fr"></slot>
    <label v-for="radioText of inputParams[1]" :for="radioText[0]" class="form-field__label">
      <input
        v-model="checkedRadio"
        :name="radioText[0]"
        :id="radioText[0]"
        :value="radioText[0]"
        @change="emitChecked"
        type="radio"
        class="form-field__radio">
      <span class="form-field__radio-span">{{ en ? radioText[1] : radioText[2] }}</span>
    </label>
    <p v-if="error" class="form-field__error">Please fill in this field.</p>
  </div>
</template>

<script>
// inputParams -> [inputName, inputArray, inputRequired]
// inputArray -> [safeChars, displayCharsEn, displayCharsFr]

export default {
  name: 'InputRadio',
  props: {
    inputParams: {
      required: true,
      type: Array,
      validator (value) {
        return value.length === 3
      }
    },
    checked: { required: false, type: String },
    en: { required: true, type: Boolean }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  data () {
    return {
      error: false,
      checkedRadio: ''
    }
  },
  methods: {
    emitChecked () {
      // this.errorCheck()
      this.$emit('change', this.checkedRadio, this.inputParams[0])
    },
    errorCheck () {
      if (this.checkedRadio.length === 0 && this.inputParams[2]) this.error = true
      else this.error = false
    }
  }
}
</script>
