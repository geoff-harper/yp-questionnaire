<template>
  <section id="existing-presence" class="existing-presence section">
    <IntroSubSection header="Products and Services" subHeader="Products and Services">
      <span slot="en">TEMP: need some text for this section's intro</span>
      <span slot="fr">TEMP: Parlons de votre public cible et des informations que vous voulez partager sur votre site web.</span>
    </IntroSubSection>
    <div class="sub-section">
      <InputPanel
        :title="productsServicesOptions.title"
        :options="productsServicesOptions.options"
        :nodes="productsServicesOptions.nodes"
        :safe="'productsServices'"></InputPanel>
    </div>
  </section>
</template>

<script>
import IntroSubSection from './IntroSubSection'
import InputPanel from './InputPanel'
import { productsServicesOptions } from '../assets/prodServicesOptions'

export default {
  name: 'ProductsServices',
  components: {
    IntroSubSection,
    InputPanel
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
