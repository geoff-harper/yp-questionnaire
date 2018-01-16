<template>
  <section id="existing-presence" class="existing-presence section">
    <IntroSubSection header="Existing Online Presence" subHeader="Social Networks">
      <p slot="en" class="sub-section__intro">Let us know which online platforms your business is currently using.</p>
    </IntroSubSection>
    <div class="sub-section">
      <h3 class="sub-section__header">Existing Online Presence</h3>
      <InputCheckbox @change="emitFieldData" :inputParams="['presenceTypes', presenceTypesOptions, false]">
        <div slot="en">
          <p class="form-field__question">What online platforms are you already on?</p>
        </div>
      </InputCheckbox>
    </div>
    <div v-if="fieldData.presenceTypes.indexOf('currentWebsite') !== -1" class="sub-section">
      <h3 class="sub-section__header">Current Website</h3>
      <InputText @input="emitFieldData" :inputParams="['domainName', 0, false]">
        <div slot="en">
          <p class="form-field__question">What is the domain name?</p>
          <p class="form-field__contextual">For example, in the URL https://business.yellowpages.ca/home/ the domain name would be yellowpages.ca</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['domainNameContinue', 0, false]">
        <div slot="en">
          <p class="form-field__question">Would you like to continue using this domain?</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['upToDateInfo', 0, false]">
        <div slot="en">
          <p class="form-field__question">Is the information on your website up to date?</p>
          <p class="form-field__contextual">Are you satisfied with the information that is currently available for your customers? We can revise and update as needed.</p>
        </div>
      </InputText>
    </div>
    <div v-if="checkSocialVisibility" class="sub-section lg">
      <h3 class="sub-section__header">Social Media</h3>
      <p class="sub-section__intro">If possible, please provide URLs</p>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('facebook') !== -1"
        @input="emitFieldData"
        :inputParams="['facebook', 0, false]">
        <div slot="en">
          <p class="form-field__question">Facebook</p>
        </div>
      </InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('instagram') !== -1"
        @input="emitFieldData"
        :inputParams="['instagram', 0, false]">
        <div slot="en">
          <p class="form-field__question">Instagram</p>
        </div>
      </InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('twitter') !== -1"
        @input="emitFieldData"
        :inputParams="['twitter', 0, false]">
        <div slot="en">
          <p class="form-field__question">Twitter</p>
        </div>
      </InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('other') !== -1"
        @input="emitFieldData"
        :inputParams="['other1', 0, false]">
        <div slot="en">
          <p class="form-field__question">Other</p>
        </div>
      </InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('other') !== -1"
        @input="emitFieldData"
        :inputParams="['other2', 0, false]">
        <div slot="en">
          <p class="form-field__question">Other</p>
        </div>
      </InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('other') !== -1"
        @input="emitFieldData"
        :inputParams="['other3', 0, false]">
        <div slot="en">
          <p class="form-field__question">Other</p>
        </div>
      </InputText>
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
