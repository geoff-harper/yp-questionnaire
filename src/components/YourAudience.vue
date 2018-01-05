<template>
  <section id="your-audience" class="your-audience section">
    <IntroSubSection header="Your Audience" subHeader="Your Goals">
      <span slot="en">Let's talk about who you are looking to attract and what information you would like to share with your new website.</span>
      <span slot="fr">TEMP: Parlons de votre public cible et des informations que vous voulez partager sur votre site web.</span>
    </IntroSubSection>
    <div class="sub-section">
      <h3 class="section__sub-header">Demographic Info</h3>
      <InputText @input="emitFieldData" :inputParams="['targetDemo', 1, true]">Who is your target demographic?</InputText>
      <InputText @input="emitFieldData" :inputParams="['firstThing', 1, false]">What is the first thing you would like your potential clients to see when visiting your website?</InputText>
    </div>
    <div class="sub-section">
      <h3 class="section__sub-header">Images and Content</h3>
      <InputCheckbox @change="emitFieldData" :inputParams="['suppliedContent', suppliedContentTypes, false]">
        Will you be supplying us with some documents, images, logos?
      </InputCheckbox>
      <InputText @input="emitFieldData" :inputParams="['stockImagesSubjects', 1, false]">What type of stock images would you like to see?</InputText>
    </div>
  </section>
</template>

<script>
import IntroSubSection from './IntroSubSection'
import InputText from './InputText'
import InputCheckbox from './InputCheckbox'
import { suppliedContentTypes } from '../assets/audienceOptions'

export default {
  name: 'YourAudience',
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
      suppliedContentTypes: suppliedContentTypes
    }
  },
  methods: {
    emitFieldData (elem, value, errorPresent) {
      this.$emit('update', 'yourAudienceData', elem, value)
      this.$emit('error', errorPresent)
    }
  }
}
</script>

<style>

</style>
