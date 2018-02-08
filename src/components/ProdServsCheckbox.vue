<template>
  <div class="form-field__checkbox-container">
    <slot v-if="en" name="en"></slot>
    <slot v-if="!en" name="fr"></slot>
    <label v-for="checkboxText of inputParams[1]" :for="checkboxText[0]" class="form-field__label">
      <input
        v-model="checked"
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
  name: 'ProdServsCheckbox',
  props: {
    inputParams: {
      required: true,
      type: Array,
      validator (value) {
        return value.length === 3
      }
    },
    en: { required: true, type: Boolean }
  },
  data () {
    return {
      error: false,
      checked: []
    }
  },
  methods: {
    emitChecked () {
      const emitArr = this.inputParams[1].filter(check => this.checked.indexOf(check[0]) !== -1)
      this.$emit('change', this.inputParams[0], emitArr, this.error)
    }
  }
}
</script>
