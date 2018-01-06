<template>
  <main id="questionnaire">
    <TabNav :activeTab="activeTab" @navigate="handleNav" />
    <form class="questionnaire-form">
      <BusinessDetails v-show="activeTab === 'businessDetails'" @update="handleData" @error="handleError" :fieldData="formData.businessDetailsData" />
      <ExistingPresence v-show="activeTab === 'existingPresence'" @update="handleData" @error="handleError" :fieldData="formData.existingPresenceData" />
      <YourAudience v-show="activeTab === 'yourAudience'" @update="handleData" @error="handleError" :fieldData="formData.yourAudienceData" />
      <FinishQuestionnaire v-show="activeTab === 'finishQuestionnaire'" :formData="formData" />
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
      activeTab: 'businessDetails',
      formData: {
        businessDetailsData: {
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
          sunday: '',
          otherInfo: ''
        },
        existingPresenceData: {
          presenceTypes: [],
          domainName: '',
          domainNameContinue: '',
          upToDateInfo: '',
          facebook: '',
          instagram: '',
          twitter: '',
          other1: '',
          other2: '',
          other3: ''
        },
        yourAudienceData: {
          targetDemo: '',
          firstThing: '',
          suppliedContent: [],
          stockImagesSubjects: ''
        }
      },
      errorPresent: false
    }
  },
  methods: {
    handleNav (tab) {
      if (!this.errorPresent) {
        this.activeTab = tab
      }
    },
    handleData (section, sectionInput, inputVal) {
      this.formData[section][sectionInput] = inputVal
    },
    handleError (errorPresent) {
      this.errorPresent = errorPresent
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
