<template>
  <section id="products-and-services" class="products-and-services section">
    <IntroSubSection header="Products &amp; Services" subHeader="Products &amp; Services">
      <p slot="en" class="sub-section__intro">We would like to know more about what you do. The following provides a range of industries we have created web products for in the past.</p>
    </IntroSubSection>
    <div class="sub-section high-level">
      <div class="form-panel__vertical">
        <h3 class="sub-section__header">{{ productsServices.en_title }}</h3>
        <InputCheckbox @change="updateVertical" :inputParams="[productsServices.safe, getVerticalTitles, false]"></InputCheckbox>
      </div>
      <div class="form-panel__sub-verticals">
        <div v-for="subVertical of productsServices.options" v-if="subVertical.visible" class="form-panel__sub-vertical-container">
          <h3 class="form-field__question">{{ subVertical.en_title }}</h3>
          <InputCheckbox @change="updateSubVertical" :inputParams="[subVertical.safe, getSubVerticalTitles(subVertical), false]"></InputCheckbox>
        </div>
      </div>
    </div>
    <div v-if="Object.keys(subVerticals).length > 0" class="sub-section low-level">
      <InputPanel v-for="(subVertical, i) of subVerticals" @change="subOptionSelected" v-if="subVertical.subOptions.length > 0" :subVertical="subVertical" :key="i"></InputPanel>
    </div>
    <div class="sub-section">
      <InputText @input="emitFieldData" :inputParams="['otherProductsServices', 1, false]">
        <div slot="en">
          <p class="form-field__question">Are there any other notes you would like to provide regarding your business information?</p>
        </div>
      </InputText>
    </div>
    <ButtonNav activeTab="productsServices" @navigate="emitNav" />
  </section>
</template>

<script>
import Vue from 'vue'
import IntroSubSection from './IntroSubSection'
import InputCheckbox from './InputCheckbox'
import InputText from './InputText'
import InputPanel from './InputPanel'
import ButtonNav from './ButtonNav'
import { productsServices } from '../assets/productServiceOptions'

export default {
  name: 'ProductsServices',
  components: {
    IntroSubSection,
    InputCheckbox,
    InputText,
    InputPanel,
    ButtonNav
  },
  props: {
    fieldData: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      productsServices: productsServices,
      checked: [],
      subVerticals: {},
      otherProductsServices: ''
    }
  },
  computed: {
    getVerticalTitles () {
      return this.productsServices.options.map(item => [item.safe, item.en_title, item.fr_title])
    }
  },
  methods: {
    getSubVerticalTitles (subVertical) {
      return subVertical.options.map(item => [item.safe, item.en_title, item.fr_title])
    },
    updateVertical (elem, value) {
      for (let vertical of this.productsServices.options) {
        if (value.indexOf(vertical.safe) !== -1) {
          vertical.visible = true
        } else {
          vertical.visible = false
          for (let subVertical of vertical.options) {
            subVertical.visible = false
            Vue.delete(this.subVerticals, subVertical.safe)
          }
        }
      }
    },
    updateSubVertical (elem, value) {
      for (let vertical of this.productsServices.options) {
        if (vertical.safe === elem) {
          for (let subVertical of vertical.options) {
            if (value.indexOf(subVertical.safe) !== -1) {
              subVertical.visible = true
              Vue.set(this.subVerticals, subVertical.safe, subVertical)
            } else {
              subVertical.visible = false
              Vue.delete(this.subVerticals, subVertical.safe)
            }
          }
        }
      }
    },
    subOptionSelected (parent, elem, value) {
      console.log(parent)
      console.log(elem)
      console.log(value)
      for (let sub of this.subVerticals[parent].subOptions) {
        if (sub.safe === elem) {
          // let emitObj = {}
        }
      }
    },
    emitFieldData (elem, value) {
      // this.emittedData[elem] = value[0]
      // this.$emit('update', 'productsServices', 'selectedProdsServices', this.emittedData)
    },
    emitNav (tab) {
      this.$emit('navigate', tab)
    }
  }
}
</script>
