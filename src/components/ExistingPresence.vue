<template>
  <section id="existing-presence" class="existing-presence section">
    <IntroSubSection header="Existing Online Presence" subHeader="Existing Online Presence">
      <span slot="en">Not everyone has an existing website or Facebook page that we can review to help us gather information. Whether you’re active online or you’re not sure where your business may be found on the World Wide Web, any information you can provide will help us inform your future profile.</span>
      <span slot="fr">TEMP: Parlons de votre public cible et des informations que vous voulez partager sur votre site web.</span>
    </IntroSubSection>
    <div class="sub-section">
      <h3 class="section__sub-header">Existing Online Presence</h3>
      <InputCheckbox @change="emitFieldData" :inputParams="['presenceTypes', presenceTypesOptions, false]">
        What online platforms are you already on?
      </InputCheckbox>
    </div>
    <div v-show="fieldData.presenceTypes.indexOf('currentWebsite') !== -1" class="sub-section">
      <h3 class="section__sub-header">Current Website</h3>
      <InputText @input="emitFieldData" :inputParams="['domainName', 0, false]">What is the domain name?</InputText>
      <InputText @input="emitFieldData" :inputParams="['domainNameContinue', 0, false]">Would you like to continue using this domain?</InputText>
      <InputText @input="emitFieldData" :inputParams="['upToDateInfo', 0, false]">Is the information on your website up to date?</InputText>
    </div>
    <div v-show="checkSocialVisibility" class="sub-section">
      <h3 class="section__sub-header">Social Media</h3>
      <p class="section__text">If possible, please provide URLs</p>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('facebook') !== -1"
        @input="emitFieldData"
        :inputParams="['facebook', 0, false]">Facebook</InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('instagram') !== -1"
        @input="emitFieldData"
        :inputParams="['instagram', 0, false]">Instagram</InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('twitter') !== -1"
        @input="emitFieldData"
        :inputParams="['twitter', 0, false]">Twitter</InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('other') !== -1"
        @input="emitFieldData"
        :inputParams="['other1', 0, false]">Other</InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('other') !== -1"
        @input="emitFieldData"
        :inputParams="['other2', 0, false]">Other</InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('other') !== -1"
        @input="emitFieldData"
        :inputParams="['other3', 0, false]">Other</InputText>
    </div>
  </section>
</template>

<script>
import IntroSubSection from './IntroSubSection'
import InputText from './InputText'
import InputCheckbox from './InputCheckbox'
import { presenceTypesOptions } from '../assets/presenceOptions'

export default {
  name: 'ExistingPresence',
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
      presenceTypesOptions: presenceTypesOptions
    }
  },
  computed: {
    checkSocialVisibility () {
      const pTypes = this.fieldData.presenceTypes
      return ((pTypes.length === 1 && pTypes.indexOf('currentWebsite') === -1) || pTypes.length >= 2)
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
