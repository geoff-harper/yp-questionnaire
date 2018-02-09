<template>
  <section id="products-and-services" class="products-and-services section">
    <IntroSubSection :header="['Products & Services', 'Produits & Services']" :subHeader="['Products & Services', 'Produits et services']" :en="en">
      <p slot="en" class="sub-section__intro">We would like to know more about what you do. The following provides a range of industries we have created web products for in the past.</p>
      <p slot="fr" class="sub-section__intro">Nous voulons en savoir plus sur ce que vous faites. Vous trouverez ci-dessous une liste des secteurs pour lesquels nous avons eu l’occasion de créer des sites Web.</p>
    </IntroSubSection>
    <div class="sub-section high-level">
      <div class="form-panel__vertical">
        <h3 class="sub-section__header">{{ en ? productsServices.en_title : productsServices.fr_title }}</h3>
        <ProdServsCheckbox @change="updateVertical" :inputParams="[productsServices.safe, getVerticalTitles, false]" :en="en"></ProdServsCheckbox>
      </div>
      <div class="form-panel__sub-verticals">
        <div v-for="subVertical of productsServices.options" v-if="subVertical.visible" class="form-panel__sub-vertical-container">
          <h3 class="form-field__question">{{ en ? subVertical.en_title : subVertical.fr_title }}</h3>
          <ProdServsCheckbox @change="updateSubVertical" :inputParams="[subVertical.safe, getSubVerticalTitles(subVertical), false]" :en="en"></ProdServsCheckbox>
        </div>
      </div>
    </div>
    <div v-if="Object.keys(subVerticals).length > 0" class="sub-section low-level">
      <InputPanel
        v-for="(subVertical, i) of subVerticals"
        @change="subOptionSelected"
        v-if="subVertical.subOptions.length > 0"
        :subVertical="subVertical"
        :key="i"
        :en="en"></InputPanel>
    </div>
    <div class="sub-section">
      <InputText v-model="fieldData.otherProductsServices" :inputParams="['otherProductsServices', 1, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Are there any other notes you would like to provide regarding your products or services?</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Y-a-t-il autre chose que vous désirez nous faire savoir concernant votre produits ou services?</p>
        </div>
      </InputText>
    </div>
    <ButtonNav activeTab="productsServices" @navigate="emitNav" :en="en" />
  </section>
</template>

<script>
import Vue from 'vue'
import IntroSubSection from './IntroSubSection'
import ProdServsCheckbox from './ProdServsCheckbox'
import InputText from './InputText'
import InputPanel from './InputPanel'
import ButtonNav from './ButtonNav'
import { productsServices } from '../assets/productServiceOptions'
export default {
  name: 'ProductsServices',
  components: {
    IntroSubSection,
    ProdServsCheckbox,
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
    en () {
      return document.documentElement.lang !== 'fr'
    },
    getVerticalTitles () {
      return this.productsServices.options.map(item => [item.safe, item.en_title, item.fr_title])
    }
  },
  methods: {
    getSubVerticalTitles (subVertical) {
      return subVertical.options.map(item => [item.safe, item.en_title, item.fr_title])
    },
    getSafes (value) {
      return value.map(val => val[0])
    },
    updateVertical (elem, value) {
      for (let vertical of this.productsServices.options) {
        if (this.getSafes(value).indexOf(vertical.safe) !== -1) {
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
            if (this.getSafes(value).indexOf(subVertical.safe) !== -1) {
              subVertical.visible = true
              Vue.set(this.subVerticals, subVertical.safe, subVertical)
              if (subVertical.subOptions.length === 0) {
                this.emitFieldData(subVertical.safe, subVertical)
              }
            } else {
              subVertical.visible = false
              Vue.delete(this.subVerticals, subVertical.safe)
            }
          }
        }
      }
    },
    subOptionSelected (parent, elem, value) {
      let emitObj = this.fieldData[parent] || {}
      emitObj.en_title = this.subVerticals[parent].en_title
      emitObj.fr_title = this.subVerticals[parent].fr_title
      if (typeof this.fieldData[parent] !== 'undefined') {
        emitObj.subVerticals = this.fieldData[parent].subVerticals
      } else {
        emitObj.subVerticals = {}
      }
      for (let sub of this.subVerticals[parent].subOptions) {
        if (sub.safe === elem) {
          const selected = sub.options.filter(x => this.getSafes(value).indexOf(x[0]) !== -1)
          let deepEmitObj = {
            en_label: sub.en_label,
            fr_label: sub.fr_label,
            safe: sub.safe,
            selected: selected
          }
          emitObj.subVerticals[sub.safe] = deepEmitObj
        }
      }
      this.emitFieldData(this.subVerticals[parent].safe, emitObj)
    },
    emitFieldData (elem, value) {
      this.$emit('update', 'productsServices', elem, value)
    },
    emitNav (tab) {
      this.$emit('navigate', tab)
    }
  }
}
</script>
