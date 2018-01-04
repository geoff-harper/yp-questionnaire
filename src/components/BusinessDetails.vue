<template>
  <section id="business-details" class="business-details section">
    <IntroSubSection header="Business Details" subHeader="Advertiser Profile">
      Congratulations on your new website product! The first step in our production process is to briefly gather some basic information regarding your business and your goals for your website. This information will help our web team to begin designing a personalized website that accurately reflects your business.
    </IntroSubSection>
    <div class="intro sub-section">
      <h3 class="section__sub-header">Business Info</h3>
      <InputText v-model="businessInfo.primaryContact" inputName="primaryContact" :inputType="0" :inputRequired="true">Primary point of contact for our website development team</InputText>
      <InputText v-model="businessInfo.displayedName" inputName="displayedName" :inputType="0" :inputRequired="true">Business name to be displayed on site</InputText>
      <InputText v-model="businessInfo.mainPhone" inputName="mainPhone" :inputType="0" :inputRequired="true">Main phone number</InputText>
      <InputText v-model="businessInfo.otherPhone" inputName="otherPhone" :inputType="1" :inputRequired="false">Additional phone numbers</InputText>
      <InputText v-model="businessInfo.email" inputName="email" :inputType="0" :inputRequired="true">Email</InputText>
      <InputText v-model="businessInfo.mainAddress" inputName="mainAddress" :inputType="0" :inputRequired="true">Main business address</InputText>
      <InputText v-model="businessInfo.otherAddress" inputName="otherAddress" :inputType="1" :inputRequired="false">Additional addresses</InputText>
    </div>
    <div class="intro sub-section">
      <h3 class="section__sub-header">Hours of Operation</h3>
    </div>
  </section>
</template>

<script>
import IntroSubSection from './IntroSubSection'
import InputText from './InputText'

export default {
  name: 'BusinessDetails',
  components: {
    IntroSubSection,
    InputText
  },
  data () {
    return {
      businessInfo: {
        primaryContact: '',
        displayedName: '',
        mainPhone: '',
        otherPhone: '',
        email: '',
        mainAddress: '',
        otherAddress: ''
      },
      operationHours: {

      }
    }
  }
}
</script>

<style>

</style>
