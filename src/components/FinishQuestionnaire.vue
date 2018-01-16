<template>
  <section id="finish-questionnaire" :class="['finish-questionnaire', 'section', !fieldData.finishSection.submitted ? 'margin': null]">
    <IntroSubSection header="Finishing Up" subHeader="Finishing Up">
      <p slot="en" class="sub-section__intro">Your insights and opinions help us do a better job. Together we can create the ideal showcase for your business! We appreciate your input. Feel free to review your answers and make any necessary changes. Once complete, click the "Complete Questionionnaire" button. This form will be added to your file as we prepare for your phone consultation.</p>
    </IntroSubSection>
    <div v-if="!fieldData.finishSection.submitted" class="submit-section">
      <input type="submit" value="Complete Questionnaire" class="button">
    </div>
    <div v-if="fieldData.finishSection.submitted" class="sub-section">
      <h3 class="sub-section__header">Thank You</h3>
      <p class="sub-section__intro">If you’re looking for more helpful hints on the website design process, please review the following YP document:</p>
      <a class="button" href="#" target="_blank">Welcome to Your Website</a>
      <p class="sub-section__intro">To get a better idea of the type of work we do, please click the link below to view YP’s online portfolio. Each site is numbered (e.g. WEB002) and will help your Fulfillment Representative determine your style preferences. Don’t worry about the type of business being featured, just focus on the elements you would like to see incorporated into your site.</p>
      <a class="button" href="http://www.wss.yellowpages.ca/portfolio/index.html" target="_blank">YP Website Portfolio</a>
    </div>
  </section>
</template>

<script>
import IntroSubSection from './IntroSubSection'

export default {
  name: 'FinishQuestionnaire',
  components: {
    IntroSubSection
  },
  props: {
    fieldData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
