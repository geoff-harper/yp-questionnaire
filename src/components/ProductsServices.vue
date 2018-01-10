<template>
  <section id="existing-presence" class="existing-presence section">
    <IntroSubSection header="Products and Services" subHeader="Products and Services">
      <span slot="en">TEMP: need some text for this section's intro</span>
      <span slot="fr">TEMP: Parlons de votre public cible et des informations que vous voulez partager sur votre site web.</span>
    </IntroSubSection>
    <div class="sub-section">
      <h3 class="section__sub-header">Products and Services</h3>
      <!-- <InputCheckbox @change="emitFieldData" :inputParams="['presenceTypes', presenceTypesOptions, false]">
        What online platforms are you already on?
      </InputCheckbox>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('facebook') !== -1"
        @input="emitFieldData"
        :inputParams="['facebook', 0, false]">Facebook</InputText> -->
    </div>
  </section>
</template>

<script>
import IntroSubSection from './IntroSubSection'
import InputText from './InputText'
import InputCheckbox from './InputCheckbox'
import { productsServicesOptions } from '../assets/prodServicesOptions'

export default {
  name: 'ProductsServices',
  components: {
    IntroSubSection,
    InputText,
    InputCheckbox
  },
  props: {
    fieldData: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      productsServicesOptions: productsServicesOptions
    }
  },
  methods: {
    emitFieldData (elem, value, errorPresent) {
      this.$emit('update', 'existingPresenceData', elem, value)
      this.$emit('error', errorPresent)
    }
  }
}
</script>

<style>

</style>
