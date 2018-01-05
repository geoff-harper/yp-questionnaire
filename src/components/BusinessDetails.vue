<template>
  <section id="business-details" class="business-details section">
    <IntroSubSection header="Business Details" subHeader="Advertiser Profile">
      <span slot="en">Congratulations on your new website product! The first step in our production process is to briefly gather some basic information regarding your business and your goals for your website. This information will help our web team to begin designing a personalized website that accurately reflects your business.</span>
      <span slot="fr">Le Congratulations on your new website product! The first step in our production process is to briefly gather some basic information regarding your business and your goals for your website. This information will help our web team to begin designing a personalized website that accurately reflects your business.</span>
    </IntroSubSection>
    <div class="sub-section">
      <h3 class="section__sub-header">Business Info</h3>
      <InputText @input="emitFieldData" :inputParams="['primaryContact', 0, true]">Primary point of contact for our website development team</InputText>
      <InputText @input="emitFieldData" :inputParams="['displayedName', 0, true]">Business name to be displayed on site</InputText>
      <InputCheckbox @change="emitFieldData" :inputParams="['displayedInfo', displayedMediums, false]">Contact information to be displayed on site</InputCheckbox>
      <InputText @input="emitFieldData" :inputParams="['mainPhone', 0, true]">Main phone number</InputText>
      <InputText @input="emitFieldData" :inputParams="['otherPhone', 1, false]">Additional phone numbers</InputText>
      <InputText @input="emitFieldData" :inputParams="['email', 0, true, true]">Email</InputText>
      <InputText @input="emitFieldData" :inputParams="['mainAddress', 0, true]">Main business address</InputText>
      <InputText @input="emitFieldData" :inputParams="['otherAddress', 1, false]">Additional addresses</InputText>
    </div>
    <div class="sub-section">
      <h3 class="section__sub-header">Hours of Operation</h3>
      <InputText @input="emitFieldData" :inputParams="['monday', 0, false]">Monday</InputText>
      <InputText @input="emitFieldData" :inputParams="['tuesday', 0, false]">Tuesday</InputText>
      <InputText @input="emitFieldData" :inputParams="['wednesday', 0, false]">Wednesday</InputText>
      <InputText @input="emitFieldData" :inputParams="['thursday', 0, false]">Thursday</InputText>
      <InputText @input="emitFieldData" :inputParams="['friday', 0, false]">Friday</InputText>
      <InputText @input="emitFieldData" :inputParams="['saturday', 0, false]">Saturday</InputText>
      <InputText @input="emitFieldData" :inputParams="['sunday', 0, false]">Sunday</InputText>
    </div>
    <div class="sub-section">
      <InputText @input="emitFieldData" :inputParams="['otherInfo', 1, false]">Are there any other notes you would like to provide regarding your business information?</InputText>
    </div>
  </section>
</template>

<script>
import IntroSubSection from './IntroSubSection'
import InputText from './InputText'
import InputCheckbox from './InputCheckbox'
import { displayedMediums } from '../assets/businessInfoOptions'

export default {
  name: 'BusinessDetails',
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
      displayedMediums: displayedMediums
    }
  },
  methods: {
    emitFieldData (elem, value, errorPresent) {
      this.$emit('update', 'businessDetailsData', elem, value)
      this.$emit('error', errorPresent)
    }
  }
}
</script>

<style>

</style>
