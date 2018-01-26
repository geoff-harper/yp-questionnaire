<template>
  <main id="questionnaire" class="questionnaire">
    <TabNav :activeTab="activeTab" @navigate="handleNav" />
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
            :errorFields="errorFields"></component>
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
        productsServices: {},
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
        }
      },
      submitted: false,
      errorPresent: false,
      errorFields: []
    }
  },
  computed: {
    getProps () {
      return this.activeTab === 'finishQuestionnaire' ? this.formData : this.formData[this.activeTab]
    }
  },
  methods: {
    handleNav (tab) {
      this.checkRequired()
      if (!this.errorPresent) {
        this.activeTab = tab
        window.ga('set', 'page', `/${tab}`)
        window.ga('send', 'pageview')
      }
    },
    handleData (section, sectionInput, inputVal) {
      this.checkRequired()
      this.formData[section][sectionInput] = inputVal
    },
    handleError (errorPresent) {
      this.errorPresent = errorPresent
    },
    checkRequired () {
      if (this.activeTab === 'businessDetails') {
        // const reqFields = ['primaryContact', 'displayedName', 'mainPhone', 'email']
        const reqFields = []
        this.errorFields = reqFields.filter(field => this.formData.businessDetails[field].length === 0)
        this.errorPresent = this.errorFields.length > 0
      }
    },
    handleSubmit () {
      const jsonString = JSON.stringify(this.formData)

      fetch('./php/mail.php', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: jsonString
      })
        // .then(res => res.json())
        .then(res => {
          console.log(res.text())
          this.submitted = true
          window.ga('send', 'event', 'Form submission')
        })
        .catch(err => console.log(err))

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
          // this.submitted = true
        })
        // .then(data => {
        //   const sectionKeys = Object.keys(this.formData)
        //   for (let section of sectionKeys) {
        //     let formKeys = Object.keys(this.formData[section])
        //
        //     for (let field of formKeys) {
        //       console.log(field)
        //       window.ga('send', 'event', 'Fields', 'skipped', field)
        //     }
        //   }
        // })
        .catch(err => console.log(err))
    }
  }
}
</script>
