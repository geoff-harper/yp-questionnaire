<template>
  <label :for="inputParams[0]" :class="['form-field__label', inputParams[2] ? 'required' : null, error ? 'error' : null]">
    <slot v-if="en" name="en"></slot>
    <slot v-if="!en" name="fr"></slot>
    <input
      v-if="inputParams[1] === 0"
      :name="inputParams[0]"
      :id="inputParams[0]"
      @input="emitText($event.target)"
      @blur="emitError()"
      :value="value"
      type="text">
    <textarea
      v-if="inputParams[1] === 1"
      :name="inputParams[0]"
      :id="inputParams[0]"
      :required="false"
      @input="emitText($event.target)"
      @blur="emitError()"
      :value="value"
      cols="30"
      rows="5">
    </textarea>
    <p class="form-field__error">Please fill in this field.</p>
  </label>
</template>

<script>
// inputParams -> [inputName, inputType, inputRequired]
// inputType -> 0 = text, 1 = textarea
// inputRequired -> bool

export default {
  name: 'InputText',
  props: {
    inputParams: {
      required: true,
      type: Array,
      validator (value) {
        return value.length >= 3
      }
    },
    value: String,
    en: { required: true, type: Boolean }
  },
  data () {
    return {
      error: true
    }
  },
  methods: {
    emitText (elem) {
      this.$emit('input', elem.value)
    },
    emitError () {
      this.error = this.value.length === 0 && this.inputParams[2]
      this.$emit('error', this.error)
    }
  }
}
</script>
