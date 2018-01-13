<template>
  <main id="questionnaire">
    <TabNav :activeTab="activeTab" @navigate="handleNav" />
    <form @submit.prevent="handleSubmit" class="questionnaire-form">
      <BusinessDetails v-show="activeTab === 'businessDetails'" @update="handleData" @error="handleError" :fieldData="formData.businessDetailsData" />
      <ProductsServices v-show="activeTab === 'productsServices'" @update="handleData" @error="handleError" :fieldData="formData.productsServicesData" />
      <ExistingPresence v-show="activeTab === 'existingPresence'" @update="handleData" @error="handleError" :fieldData="formData.existingPresenceData" />
      <YourAudience v-show="activeTab === 'yourAudience'" @update="handleData" @error="handleError" :fieldData="formData.yourAudienceData" />
      <FinishQuestionnaire v-show="activeTab === 'finishQuestionnaire'" @update="handleData" :formData="formData" />
    </form>
    <ButtonNav v-show="activeTab !== 'finishQuestionnaire'" :activeTab="activeTab" @navigate="handleNav" />
  </main>
</template>

<script>
import TabNav from './components/TabNav'
import BusinessDetails from './components/BusinessDetails'
import ProductsServices from './components/ProductsServices'
import ExistingPresence from './components/ExistingPresence'
import YourAudience from './components/YourAudience'
import FinishQuestionnaire from './components/FinishQuestionnaire'
import ButtonNav from './components/ButtonNav'

export default {
  name: 'Questionnaire',
  components: {
    TabNav,
    BusinessDetails,
    ProductsServices,
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
        productsServicesData: {
          selectedProdsServices: []
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
        },
        finishSection: {
          rep: '',
          submitted: false
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
    },
    handleSubmit () {
      const jsonString = JSON.stringify(this.formData)

      // fetch('./php/mail.php', {
      fetch('https://httpbin.org/post', {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: jsonString
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.formData.finishSection.submitted = true
        })
        .catch(err => console.log(err))
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
p.form-field__question { font-weight: bold; }
</style>
