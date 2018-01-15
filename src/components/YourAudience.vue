<template>
  <section id="your-audience" class="your-audience section">
    <IntroSubSection header="Your Audience" subHeader="Your Goals">
      <p slot="en" class="sub-section__intro">Let's talk about who you are looking to attract and what information you would like to share on your new website.</p>
    </IntroSubSection>
    <div class="sub-section">
      <h3 class="sub-section__header">Demographic Info</h3>
      <InputText @input="emitFieldData" :inputParams="['targetDemo', 1, true]">
        <div slot="en">
          <p class="form-field__question">Who is your target demographic?</p>
          <p class="form-field__contextual">Think about the customers you’ve helped in the past. Whether your focus is B2C (business-to-consumer) or B2B (business to business), you need to direct your efforts accordingly.</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['firstThing', 1, false]">
        <div slot="en">
          <p class="form-field__question">First Impression</p>
          <p class="form-field__contextual">What is the first thing you would like potential clients to see when visiting your website? It is always important to set the right tone. You only get one chance to make a great first impression.</p>
        </div>
      </InputText>
      <InputCheckbox @change="emitFieldData" :inputParams="['suppliedContent', suppliedContentTypes, false]">
        <div slot="en">
          <p class="form-field__question">Images/Content</p>
          <p class="form-field__contextual">Simply put, nobody understands your business as well as you. Your designated web team will do their best to provide you with content that accurately reflects your business; however, the more specific and relevant the copy and photos are to your particular business the better. Will you be supplying us with documentation, images, logos? Click all that apply.</p>
        </div>
      </InputCheckbox>
      <InputText @input="emitFieldData" :inputParams="['stockImagesSubjects', 1, false]">
        <div slot="en">
          <p class="form-field__question">What type of stock images would you like to see?</p>
          <p class="form-field__contextual">If you do not have access to quality photos of your business, YP can supply you with generic high-quality images from our stock photo provider. Simply let us know the type of imagery you would like to see and we will find a suitable option (e.g. a family with bright smiles for a dental site, engine parts for an auto mechanic, etc.).</p>
        </div>
      </InputText>
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
