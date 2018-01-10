<template>
  <label :for="inputParams[0]" class="form-field__label">
    <slot>Input label</slot>
    <input
      v-if="inputParams[1] === 0"
      :name="inputParams[0]"
      :id="inputParams[0]"
      :required="false"
      @input="emitText($event.target)"
      type="text">
    <textarea
      v-if="inputParams[1] === 1"
      :name="inputParams[0]"
      :id="inputParams[0]"
      :required="false"
      @input="emitText($event.target)"
      cols="30"
      rows="10">
    </textarea>
    <p v-show="error" class="form-field__error">Please fill in this field.</p>
  </label>
</template>

<script>
// inputParams -> [inputName, inputType, inputRequired, emailValidate]
// inputType -> 0 = text, 1 = textarea
// inputRequired -> bool
// emailValidate -> bool

export default {
  name: 'InputText',
  props: {
    inputParams: {
      required: true,
      type: Array,
      validator (value) {
        return value.length >= 3
      }
    }
  },
  data () {
    return {
      error: false
    }
  },
  methods: {
    emitText (elem) {
      this.errorCheck(elem.value)
      this.$emit('input', elem.id, elem.value, this.error)
    },
    errorCheck (val) {
      if (this.inputParams[2]) this.error = (val.length === 0)
      // else if (this.inputParams[3]) this.error = this.validateEmail(val)
      else this.error = false
    },
    validateEmail (email) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return reg.test(email.toLowerCase())
    }
  }
}
</script>

<style>

</style>
