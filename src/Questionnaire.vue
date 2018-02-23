<template>
  <main id="questionnaire" class="questionnaire">
    <TabNav :activeTab="activeTab" @navigate="handleNav" :en="en" />
    <form @submit.prevent="handleSubmit" class="questionnaire-form">
      <transition name="slide-fade" mode="out-in">
        <keep-alive>
          <component
            :is="activeTab"
            :fieldData="getProps"
            :submitted="submitted"
            @update="handleData"
            @error="handleError"
            @navigate="handleNav"
            :class="showErrors ? 'show-errors' : null"
            :en="en"></component>
        </keep-alive>
      </transition>
    </form>
  </main>
</template>

<script>
import TabNav from './components/TabNav'
import BusinessDetails from './components/BusinessDetails'
import ProductsServices from './components/ProductsServices'
import ExistingPresence from './components/ExistingPresence'
import YourAudience from './components/YourAudience'
import FinishQuestionnaire from './components/FinishQuestionnaire'

export default {
  name: 'Questionnaire',
  components: {
    TabNav,
    'businessDetails': BusinessDetails,
    'productsServices': ProductsServices,
    'existingPresence': ExistingPresence,
    'yourAudience': YourAudience,
    'finishQuestionnaire': FinishQuestionnaire
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
          otherProductsServices: ''
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
          example1: '',
          example2: '',
          example3: '',
          targetDemo: '',
          firstThing: '',
          suppliedContent: [],
          stockImagesSubjects: ''
        },
        en: true
      },
      submitted: false,
      errorPresent: true,
      showErrors: false
    }
  },
  mounted () {
    if (this.storageAvailable && localStorage.getItem('yp-questionnaire')) {
      const storedData = JSON.parse(localStorage.getItem('yp-questionnaire'))
      if (typeof storedData.businessDetails.primaryContact !== 'undefined') {
        this.formData = storedData
        this.errorPresent = storedData.businessDetails.primaryContact.length === 0 ||
                            storedData.businessDetails.displayedName.length === 0 ||
                            storedData.businessDetails.mainPhone.length === 0
      }
    }
  },
  computed: {
    getProps () {
      return this.activeTab === 'finishQuestionnaire' ? this.formData : this.formData[this.activeTab]
    },
    en () {
      return document.documentElement.lang !== 'fr'
    },
    storageAvailable () {
      try {
        let storage = window['localStorage']
        const x = '__storage_test__'
        storage.setItem(x, x)
        storage.removeItem(x)
        return true
      } catch (e) {
        return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          window['localStorage'].length !== 0
      }
    }
  },
  methods: {
    handleNav (tab) {
      if (!this.errorPresent) {
        this.activeTab = tab
        window.scroll(0, 0)
        window.ga('set', 'page', `/${tab}`)
        window.ga('send', 'pageview')
      } else {
        this.showErrors = true
      }
      if (this.storageAvailable) {
        const storageString = JSON.stringify(this.formData)
        localStorage.setItem('yp-questionnaire', storageString)
      }
    },
    handleData (section, sectionInput, inputVal) {
      this.formData[section][sectionInput] = inputVal
    },
    handleError (errorPresent) {
      this.errorPresent = errorPresent
      if (this.showErrors && !errorPresent) this.showErrors = false
    },
    handleSubmit () {
      let objToSend = this.formData
      objToSend.en = this.en
      const jsonString = JSON.stringify(objToSend)

      fetch('http://mail.advertiserprofile.ca/', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: jsonString
      })
        .then(res => {
          this.submitted = true
          window.ga('send', 'event', 'Form submission')
          if (this.storageAvailable && localStorage.getItem('yp-questionnaire')) localStorage.removeItem('yp-questionnaire')
        })
        .catch(err => console.log(err))

      // fetch('https://httpbin.org/post', {
      //   headers: {
      //     'Accept': 'application/json, text/plain, */*',
      //     'Content-Type': 'application/json'
      //   },
      //   method: 'POST',
      //   body: jsonString
      // })
      //   .then(res => res.json())
      //   .then(data => {
      //     this.submitted = true
      //     console.log(data)
      //   })
      //   .catch(err => console.log(err))
    }
  }
}
</script>
