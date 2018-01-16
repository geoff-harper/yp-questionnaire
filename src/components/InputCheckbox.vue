<template>
  <div class="form-field__checkbox-container">
    <slot name="en"></slot>
    <slot name="fr"></slot>
    <label v-for="checkboxText of inputParams[1]" :for="checkboxText[0]" class="form-field__label">
      <input
        v-model="checked"
        :name="inputParams[0]"
        :id="checkboxText[0]"
        :value="checkboxText[0]"
        @change="emitChecked"
        type="checkbox"
        class="form-field__checkbox">
      <span class="form-field__checkbox-span">{{ checkboxText[1] }}</span>
    </label>
    <p v-if="error" class="form-field__error">Please fill in this field.</p>
  </div>
</template>

<script>
// inputParams -> [inputName, inputUnique, inputRequired]
// inputUnique -> [safeChars, displayCharsEn, displayCharsFr]

export default {
  name: 'InputCheckbox',
  props: {
    inputParams: {
      required: true,
      type: Array,
      validator (value) {
        return value.length === 3
      }
    }
  },
  data () {
    return {
      error: false,
      checked: []
    }
  },
  methods: {
    emitChecked () {
      this.errorCheck()
      this.$emit('change', this.inputParams[0], this.checked, this.error)
    },
    errorCheck () {
      if (this.checked.length === 0 && this.inputParams[2]) this.error = true
      else this.error = false
    }
  }
}
</script>
