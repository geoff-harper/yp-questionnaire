<template>
  <main id="questionnaire">
    <TabNav :activeTab="activeTab" @navigate="handleNav" />
    <form class="questionnaire-form">
      <BusinessDetails v-show="activeTab === 'businessDetails'" />
      <ExistingPresence v-show="activeTab === 'existingPresence'" />
      <YourAudience v-show="activeTab === 'yourAudience'" />
      <FinishQuestionnaire v-show="activeTab === 'finishQuestionnaire'" />
    </form>
    <ButtonNav v-show="activeTab !== 'finishQuestionnaire'" :activeTab="activeTab" @navigate="handleNav" />
  </main>
</template>

<script>
import TabNav from './components/TabNav'
import BusinessDetails from './components/BusinessDetails'
import ExistingPresence from './components/ExistingPresence'
import YourAudience from './components/YourAudience'
import FinishQuestionnaire from './components/FinishQuestionnaire'
import ButtonNav from './components/ButtonNav'

export default {
  name: 'Questionnaire',
  components: {
    TabNav,
    BusinessDetails,
    ExistingPresence,
    YourAudience,
    FinishQuestionnaire,
    ButtonNav
  },
  data () {
    return {
      activeTab: 'existingPresence',
      formData: {
        businessDetailsData: {},
        existingPresenceData: {},
        yourAudienceData: {}
      },
      errorPresent: false
    }
  },
  methods: {
    handleNav (tab) {
      if (!this.errorPresent) {
        this.activeTab = tab
      }
    }
  }
}
</script>

<style>
#questionnaire {
  width: 500px;
}
label {
  margin-bottom: 20px;
}
label, input, textarea {
  display: block;
}
.form-field__error {
  color: red;
}
</style>
