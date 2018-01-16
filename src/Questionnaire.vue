<template>
  <main id="questionnaire" class="questionnaire">
    <TabNav :activeTab="activeTab" @navigate="handleNav" />
    <form @submit.prevent="handleSubmit" class="questionnaire-form">
      <transition name="slide-fade" mode="out-in">
        <keep-alive>
          <component :is="activeTab" :fieldData="getProps" @update="handleData" @error="handleError" @navigate="handleNav"></component>
        </keep-alive>
      </transition>
    </form>
    <!-- <ButtonNav  :activeTab="activeTab" @navigate="handleNav" :class="navigating ? 'button-nav-animation' : null" /> -->
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
    'businessDetails': BusinessDetails,
    'productsServices': ProductsServices,
    'existingPresence': ExistingPresence,
    'yourAudience': YourAudience,
    'finishQuestionnaire': FinishQuestionnaire,
    ButtonNav
  },
  data () {
    return {
      activeTab: 'businessDetails',
      formData: {
        businessDetails: {
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
        productsServices: {
          selectedProdsServices: []
        },
        existingPresence: {
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
        yourAudience: {
          targetDemo: '',
          firstThing: '',
          suppliedContent: [],
          stockImagesSubjects: ''
        },
        finishSection: {
          submitted: false
        }
      },
      errorPresent: false
    }
  },
  computed: {
    getProps () {
      return this.activeTab === 'finishQuestionnaire' ? this.formData : this.formData[this.activeTab]
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
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 300ms ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
