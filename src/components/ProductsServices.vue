<template>
  <section id="products-and-services" class="products-and-services section">
    <IntroSubSection header="Products &amp; Services" subHeader="Products &amp; Services">
      <p slot="en" class="sub-section__intro">We would like to know more about what you do. The following provides a range of industries we have created web products for in the past.</p>
    </IntroSubSection>
    <div class="sub-section">
      <InputPanel
        @update="emitFieldData"
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
      productsServicesOptions: productsServicesOptions,
      emittedData: {}
    }
  },
  methods: {
    emitFieldData (elem, value) {
      this.emittedData[elem] = value[0]
      this.$emit('update', 'productsServicesData', 'selectedProdsServices', this.emittedData)
    }
  }
}
</script>
