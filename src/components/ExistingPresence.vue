<template>
  <section id="existing-presence" class="existing-presence section">
    <IntroSubSection :header="['Existing Online Presence', 'Présence en ligne']" :subHeader="['Social Networks', 'Réseaux sociaux']" :en="en">
      <p slot="en" class="sub-section__intro">Let us know which online platforms your business is currently using.</p>
      <p slot="fr" class="sub-section__intro">Quelles plateformes utilisez-vous actuellement en ligne pour votre entreprise? Veuillez cochez tout ce qui s’applique.</p>
    </IntroSubSection>
    <div class="sub-section">
      <h3 class="sub-section__header">{{ en ? 'Existing Online Presence' : 'Votre présence en ligne à ce jour' }}</h3>
      <InputCheckbox v-model="fieldData.presenceTypes" :inputParams="['presenceTypes', presenceTypesOptions, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">What online platforms are you already on?</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Sur quelles plateformes êtes-vous déjà présent?</p>
        </div>
      </InputCheckbox>
    </div>
    <div v-if="fieldData.presenceTypes.indexOf('currentWebsitePresence') !== -1" class="sub-section">
      <h3 class="sub-section__header">{{ en ? 'Current Website' : 'Site Web actuel' }}</h3>
      <InputText v-model="fieldData.domainName" :inputParams="['domainName', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">What is the domain name?</p>
          <p class="form-field__contextual">For example, in the URL https://business.yellowpages.ca/home/ the domain name would be yellowpages.ca</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Quel est le nom de domaine?</p>
          <p class="form-field__contextual">Par exemple, dans le URL https://business.yellowpages.ca/home/ le nom de domaine est yellowpages.ca</p>
        </div>
      </InputText>
      <InputRadio v-model="fieldData.domainNameContinue" :inputParams="['domainNameContinue', domainContinueOptions, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Would you like to continue using this domain?</p>
          <p class="form-field__contextual">If you would like us to manage this domain, please have your login credentials to the domain registrar ready for the consultation. We will also ask if you have any email addresses under this domain and how many there are so we can understand your email needs.</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Souhaitez-vous garder ce domaine?</p>
          <p class="form-field__contextual">Si vous souhaitez que nous ayons la prise en charge de ce domaine, veuillez avoir vos identifiants de connexion au registraire de domaine prêts pour la consultation. Nous vous demanderons également si vous avez des courriels sur ce domaine et combien il y en a pour nous permettre à comprendre vos besoins en courriel.</p>
        </div>
      </InputRadio>
      <InputText v-model="fieldData.upToDateInfo" :inputParams="['upToDateInfo', 1, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Is the information on your website up to date?</p>
          <p class="form-field__contextual">Are you satisfied with the information that is currently available for your customers? We can revise and update as needed.</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Le contenu de votre site est-il à jour?</p>
          <p class="form-field__contextual">Êtes-vous satisfait du contenu actuellement à la disposition de vos clients? Nous pouvons le revoir et le mettre à jour en fonction de vos besoins.</p>
        </div>
      </InputText>
    </div>
    <div v-if="checkSocialVisibility" class="sub-section lg">
      <h3 class="sub-section__header">{{ en ? 'Social Media' : 'Veuillez fournir vos comptes de médias sociaux' }}</h3>
      <p v-if="en" class="sub-section__intro">If possible, please provide URLs</p>
      <p v-if="!en" class="sub-section__intro">Veuillez si possible nous fournir les URLs</p>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('facebookPresence') !== -1"
        v-model="fieldData.facebook"
        :inputParams="['facebook', 0, false]"
        :en="en">
        <div slot="en">
          <p class="form-field__question">Facebook</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Facebook</p>
        </div>
      </InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('instagramPresence') !== -1"
        v-model="fieldData.instagram"
        :inputParams="['instagram', 0, false]"
        :en="en">
        <div slot="en">
          <p class="form-field__question">Instagram</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Instagram</p>
        </div>
      </InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('twitterPresence') !== -1"
        v-model="fieldData.twitter"
        :inputParams="['twitter', 0, false]"
        :en="en">
        <div slot="en">
          <p class="form-field__question">Twitter</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Twitter</p>
        </div>
      </InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('otherPresence') !== -1"
        v-model="fieldData.other1"
        :inputParams="['other1', 0, false]"
        :en="en">
        <div slot="en">
          <p class="form-field__question">Other</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Autre</p>
        </div>
      </InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('otherPresence') !== -1"
        v-model="fieldData.other2"
        :inputParams="['other2', 0, false]"
        :en="en">
        <div slot="en">
          <p class="form-field__question">Other</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Autre</p>
        </div>
      </InputText>
      <InputText
        v-show="fieldData.presenceTypes.indexOf('otherPresence') !== -1"
        v-model="fieldData.other3"
        :inputParams="['other3', 0, false]"
        :en="en">
        <div slot="en">
          <p class="form-field__question">Other</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Autre</p>
        </div>
      </InputText>
    </div>
    <ButtonNav activeTab="existingPresence" @navigate="emitNav" :en="en" />
  </section>
</template>

<script>
import IntroSubSection from './IntroSubSection'
import InputText from './InputText'
import InputCheckbox from './InputCheckbox'
import InputRadio from './InputRadio'
import ButtonNav from './ButtonNav'
import { presenceTypesOptions, domainContinueOptions } from '../assets/presenceOptions'

export default {
  name: 'ExistingPresence',
  components: {
    IntroSubSection,
    InputText,
    InputCheckbox,
    InputRadio,
    ButtonNav
  },
  props: {
    fieldData: { required: true, type: Object },
    en: { required: true, type: Boolean }
  },
  data () {
    return {
      presenceTypesOptions: presenceTypesOptions,
      domainContinueOptions: domainContinueOptions
    }
  },
  computed: {
    checkSocialVisibility () {
      const pTypes = this.fieldData.presenceTypes
      return ((pTypes.length === 1 && pTypes.indexOf('currentWebsitePresence') === -1) || pTypes.length >= 2)
    }
  },
  methods: {
    emitFieldData (elem, value, errorPresent) {
      this.$emit('update', 'existingPresence', elem, value)
      this.$emit('error', errorPresent)
    },
    emitNav (tab) {
      this.$emit('navigate', tab)
    }
  }
}
</script>
