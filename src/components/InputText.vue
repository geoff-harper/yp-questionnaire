<template>
  <label :for="inputParams[0]" class="form-field__label">
    <slot>Input label</slot>
    <input
      v-if="inputParams[1] === 0"
      :name="inputParams[0]"
      :id="inputParams[0]"
      :required="inputParams[2]"
      @input="emitText($event.target)"
      @blur="errorCheck($event.target.value)"
      type="text">
    <textarea
      v-if="inputParams[1] === 1"
      :name="inputParams[0]"
      :id="inputParams[0]"
      :required="inputParams[2]"
      @input="emitText($event.target)"
      @blur="errorCheck($event.target.value)"
      cols="30"
      rows="10">
    </textarea>
    <p v-show="error" class="form-field__error">Please fill in this field.</p>
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
        return value.length === 3
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
      this.$emit('input', elem.id, elem.value, this.error)
    },
    errorCheck (val) {
      if (val.length === 0 && this.inputParams[2]) this.error = true
      else this.error = false
    }
  }
}
</script>

<style>

</style>
