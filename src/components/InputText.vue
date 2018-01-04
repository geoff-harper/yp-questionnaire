<template>
  <label :for="inputName" class="form-label">
    <slot>Input label</slot>
    <input
      v-if="inputType === 0"
      :value="value"
      @input="emitText($event.target.value)"
      :name="inputName"
      :id="inputName"
      type="text"
      :required="inputRequired">
    <textarea
      v-if="inputType === 1"
      :name="inputName"
      :id="inputName"
      cols="30"
      rows="10">
    </textarea>
  </label>
</template>

<script>
// inputType -> 0 = text, 1 = textarea

export default {
  name: 'IntroSubSection',
  props: {
    inputName: {
      required: true,
      type: String
    },
    inputType: {
      required: true,
      type: Number
    },
    inputRequired: {
      required: true,
      type: Boolean
    },
    value
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    emitText(text) {
      $emit(input, text)
    }
  }
}
</script>

<style>

</style>
