<template>
  <div class="form-field__checkbox-container">
    <slot v-if="en" name="en"></slot>
    <slot v-if="!en" name="fr"></slot>
    <label v-for="checkboxText of inputParams[1]" :for="checkboxText[0]" class="form-field__label">
      <input
        v-model="checkedBoxes"
        :name="checkboxText[0]"
        :id="checkboxText[0]"
        :value="checkboxText[0]"
        @change="emitChecked"
        type="checkbox"
        class="form-field__checkbox">
      <span class="form-field__checkbox-span">{{ en ? checkboxText[1] : checkboxText[2] }}</span>
    </label>
    <p v-if="error" class="form-field__error">Please fill in this field.</p>
  </div>
</template>

<script>
// inputParams -> [inputName, inputArray, inputRequired]
// inputArray -> [safeChars, displayCharsEn, displayCharsFr]

export default {
  name: 'InputCheckbox',
  props: {
    inputParams: {
      required: true,
      type: Array,
      validator (value) {
        return value.length === 3
      }
    },
    checked: { required: false, type: Array },
    en: { required: true, type: Boolean }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  data () {
    return {
      checkedBoxes: this.checked,
      error: false
    }
  },
  methods: {
    emitChecked () {
      this.$emit('change', this.checkedBoxes, this.inputParams[0])
    },
    getChecked () {
      return this.checked
    },
    errorCheck () {
      if (this.checkedBoxes.length === 0 && this.inputParams[2]) this.error = true
      else this.error = false
    }
  }
}
</script>
