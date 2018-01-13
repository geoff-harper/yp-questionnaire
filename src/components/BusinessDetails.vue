<template>
  <section id="business-details" class="business-details section">
    <IntroSubSection header="Business Details" subHeader="Advertiser Profile">
      <p slot="en" class="sub-section__intro">Congratulations on your new website product! The first step in our production process is to learn a little bit more about your business and its goals. This information will help our web team strategize a plan before the next scheduled phone consultation. Your responses here will help us strengthen your online presence.</p>
      <p slot="fr" class="sub-section__intro">French placeholder text.</p>
    </IntroSubSection>
    <div class="sub-section">
      <h3 class="sub-section__header">Business Info</h3>
      <p class="sub-section__primer">Let's start with some of the basic business details.</p>
      <InputText @input="emitFieldData" :inputParams="['primaryContact', 0, true]">
        <div slot="en">
          <p class="form-field__question">Primary point of contact for our website development team</p>
          <p class="form-field__contextual">Ask yourself, who is best suited to speak about the particulars of the business for the duration of the process?</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['displayedName', 0, true]">
        <div slot="en">
          <p class="form-field__question">Business name to be displayed on site</p>
          <p class="form-field__contextual">Does your online logo match the name printed on your business cards? For example, if you represent a private limited company, do you spell your name Ltd. (with a period), Ltd (without the period), LTD (all caps), or Limited (spelled out)?</p>
        </div>
      </InputText>
      <InputCheckbox @change="emitFieldData" :inputParams="['displayedInfo', displayedMediums, false]">
        <div slot="en">
          <p class="form-field__question">Contact information to be displayed on site</p>
        </div>
      </InputCheckbox>
      <InputText @input="emitFieldData" :inputParams="['mainPhone', 0, true]">
        <div slot="en">
          <p class="form-field__question">Main phone number</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['otherPhone', 1, false]">
        <div slot="en">
          <p class="form-field__question">Additional phone numbers</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['email', 0, true, true]">
        <div slot="en">
          <p class="form-field__question">Email</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['mainAddress', 0, true]">
        <div slot="en">
          <p class="form-field__question">Main business address</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['otherAddress', 1, false]">
        <div slot="en">
          <p class="form-field__question">Additional addresses</p>
        </div>
      </InputText>
    </div>
    <div class="sub-section">
      <h3 class="sub-section__header">Hours of Operation</h3>
      <InputText @input="emitFieldData" :inputParams="['monday', 0, false]">
        <div slot="en">
          <p class="form-field__question">Monday</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['tuesday', 0, false]">
        <div slot="en">
          <p class="form-field__question">Tuesday</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['wednesday', 0, false]">
        <div slot="en">
          <p class="form-field__question">Wednesday</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['thursday', 0, false]">
        <div slot="en">
          <p class="form-field__question">Thursday</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['friday', 0, false]">
        <div slot="en">
          <p class="form-field__question">Friday</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['saturday', 0, false]">
        <div slot="en">
          <p class="form-field__question">Saturday</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['sunday', 0, false]">
        <div slot="en">
          <p class="form-field__question">Sunday</p>
        </div>
      </InputText>
    </div>
    <div class="sub-section">
      <InputText @input="emitFieldData" :inputParams="['otherInfo', 1, false]">
        <div slot="en">
          <p class="form-field__question">Are there any other notes you would like to provide regarding your business information?</p>
        </div>
      </InputText>
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
