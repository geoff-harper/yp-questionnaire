<template>
  <section id="existing-presence" class="existing-presence section">
    <IntroSubSection header="Great job kid" subHeader="Now don't get cocky">
      <span slot="en"></span>
      <span slot="fr"></span>
    </IntroSubSection>
    <div class="sub-section">
      <img src="https://media1.tenor.com/images/a2ba6c6292ebaaa4c6c7f01480cbef02/tenor.gif" alt="nice">
    </div>
    <div class="sub-section">
      {{ formData }}
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
    formData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
