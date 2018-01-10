<template>
  <section id="existing-presence" class="existing-presence section">
    <IntroSubSection header="Great job kid" subHeader="Now don't get cocky">
      <span slot="en">Thanks for doing the form, you nailed it.</span>
      <span slot="fr">Le thanks for doing the form, you nailed it.</span>
    </IntroSubSection>
    <div class="sub-section">
      <h3 class="section__sub-header">Select Your Representative</h3>
      <label for="repNames" class="form-field__label">
        <select v-model="selectedRep" @change="emitRep()" name="repNames" id="repNames">
          <option v-for="rep of repNames" :value="rep[0]">{{ rep[1] }}</option>
        </select>
      </label>
      <input v-if="selectedRep !== ''" type="submit" value="Complete Questionnaire" class="form-button">
      <!-- <img src="https://media1.tenor.com/images/a2ba6c6292ebaaa4c6c7f01480cbef02/tenor.gif" alt="nice"> -->
    </div>
    <!-- <div class="sub-section">
      {{ formData }}
    </div> -->
  </section>
</template>

<script>
import IntroSubSection from './IntroSubSection'
import { repNames } from '../assets/repOptions'

export default {
  name: 'FinishQuestionnaire',
  components: {
    IntroSubSection
  },
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      repNames: repNames,
      selectedRep: ''
    }
  },
  methods: {
    emitRep () {
      this.$emit('update', this.selectedRep)
    }
  }
}
</script>

<style>

</style>
