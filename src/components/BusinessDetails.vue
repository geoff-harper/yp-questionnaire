<template>
  <section id="business-details" class="business-details section">
    <IntroSubSection header="Business Details" subHeader="Advertiser Profile">
      Congratulations on your new website product! The first step in our production process is to briefly gather some basic information regarding your business and your goals for your website. This information will help our web team to begin designing a personalized website that accurately reflects your business.
    </IntroSubSection>
    <div class="sub-section">
      <h3 class="section__sub-header">Business Info</h3>
      <InputText @input="updateFieldData" :inputParams="['primaryContact', 0, true]">Primary point of contact for our website development team</InputText>
      <InputText @input="updateFieldData" :inputParams="['displayedName', 0, true]">Business name to be displayed on site</InputText>
      <InputCheckbox @change="updateFieldData" :inputParams="['displayedInfo', displayedMediums, false]">Contact information to be displayed on site</InputCheckbox>
      <InputText @input="updateFieldData" :inputParams="['mainPhone', 0, true]">Main phone number</InputText>
      <InputText @input="updateFieldData" :inputParams="['otherPhone', 1, false]">Additional phone numbers</InputText>
      <InputText @input="updateFieldData" :inputParams="['email', 0, true]">Email</InputText>
      <InputText @input="updateFieldData" :inputParams="['mainAddress', 0, true]">Main business address</InputText>
      <InputText @input="updateFieldData" :inputParams="['otherAddress', 1, false]">Additional addresses</InputText>
    </div>
    <div class="sub-section">
      <h3 class="section__sub-header">Hours of Operation</h3>
      <InputText @input="updateFieldData" :inputParams="['monday', 0, false]">Monday</InputText>
      <InputText @input="updateFieldData" :inputParams="['tuesday', 0, false]">Tuesday</InputText>
      <InputText @input="updateFieldData" :inputParams="['wednesday', 0, false]">Wednesday</InputText>
      <InputText @input="updateFieldData" :inputParams="['thursday', 0, false]">Thursday</InputText>
      <InputText @input="updateFieldData" :inputParams="['friday', 0, false]">Friday</InputText>
      <InputText @input="updateFieldData" :inputParams="['saturday', 0, false]">Saturday</InputText>
      <InputText @input="updateFieldData" :inputParams="['sunday', 0, false]">Sunday</InputText>
    </div>
    <div class="sub-section">
      <InputText @input="updateOtherInfo" :inputParams="['otherInfo', 1, false]">Are there any other notes you would like to provide regarding your business information?</InputText>
    </div>
  </section>
</template>

<script>
import IntroSubSection from './IntroSubSection'
import InputText from './InputText'
import InputCheckbox from './InputCheckbox'
import { displayedMediums } from '../assets/businessInfoOptions.js'

export default {
  name: 'BusinessDetails',
  components: {
    IntroSubSection,
    InputText,
    InputCheckbox
  },
  data () {
    return {
      fieldData: {
        primaryContact: '',
        displayedName: '',
        displayedInfo: [],
        mainPhone: '',
        otherPhone: '',
        email: '',
        mainAddress: '',
        otherAddress: '',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: ''
      },
      displayedMediums: displayedMediums,
      otherInfo: '',
      errorPresent: false
    }
  },
  methods: {
    updateFieldData (elem, errorPresent) {
      this.fieldData[elem.id] = elem.value
      this.errorPresent = errorPresent
    },
    updateOtherInfo (elem, errorPresent) {
      this.otherInfo = elem.value
      this.errorPresent = errorPresent
    }
  }
}
</script>

<style>

</style>
