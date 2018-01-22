<template>
  <section id="finish-questionnaire" :class="['finish-questionnaire', 'section', !fieldData.finishSection.submitted ? 'margin': null]">
    <IntroSubSection header="Finish Questionnaire" subHeader="Finishing Up">
      <p slot="en" class="sub-section__intro">Your insights and opinions help us do a better job. Together we can create the ideal showcase for your business! We appreciate your input. Feel free to review your answers and make any necessary changes. Once complete, click the "Complete Questionionnaire" button. This form will be added to your file as we prepare for your phone consultation.</p>
    </IntroSubSection>
    <div v-if="!fieldData.finishSection.submitted" class="submit-section">
      <input type="submit" value="Complete Questionnaire" class="button">
    </div>
    <transition name="slide-fade" mode="out-in">
      <div v-show="fieldData.finishSection.submitted" class="sub-section thank-you">
        <h3 class="sub-section__header">Thank You</h3>
        <div class="thank-you__third">
          <p class="sub-section__intro">If you’re looking for more helpful hints on the website design process prior to your next consultation, please review the following YP document. It contains practical information on everything from the visual components to the written copy and more.</p>
          <a class="button" href="/uploads/welcome_to_your_website-en.pdf" target="_blank">Welcome to Your Website</a>
        </div>
        <div class="thank-you__third">
          <p class="sub-section__intro">Take a look at YP’s online portfolio. Don’t worry about the type of business being featured, just focus on the visual design that appeals to you the most. Each website is numbered (e.g., WEB002) for reference when speaking with your YP representative.</p>
          <a class="button" href="http://www.wss.yellowpages.ca/portfolio/index.html" target="_blank">YP Website Portfolio</a>
        </div>
        <div class="thank-you__third">
          <p class="sub-section__intro">As a YP customer, you have full online access to view your website’s analytics, make updates, pay bills and learn more about the range of products and services we provide. Stay connected and make the most of your purchase with this useful resource.</p>
          <a class="button" href="https://business.yellowpages.ca/" target="_blank">YP4 Business Centre</a>
        </div>
      </div>
    </transition>
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
