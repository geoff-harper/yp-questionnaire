<template>
  <section id="existing-presence" class="existing-presence section">
    <IntroSubSection :header="['Existing Online Presence', 'Présence en ligne actuelle']" :subHeader="['Social Networks', 'Réseaux sociaux']" :en="en">
      <p slot="en" class="sub-section__intro">Let us know which online platforms your business is currently using.</p>
      <p slot="fr" class="sub-section__intro">Quelle plateforme utilisez-vous actuellement en ligne pour votre entreprise? Veuillez cochez tout ce qui s’applique.</p>
    </IntroSubSection>
    <div class="sub-section">
      <h3 class="sub-section__header">{{ en ? 'Existing Online Presence' : 'Votre présence en ligne à ce jour' }}</h3>
      <InputCheckbox @change="emitFieldData" :inputParams="['presenceTypes', presenceTypesOptions, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">What online platforms are you already on?</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Sur quelles plateformes êtes-vous déjà présent?</p>
        </div>
      </InputCheckbox>
    </div>
    <div v-if="fieldData.presenceTypes.indexOf('currentWebsite') !== -1" class="sub-section">
      <h3 class="sub-section__header">{{ en ? 'Current Website' : 'Site Web actuel' }}</h3>
      <InputText @input="emitFieldData" :inputParams="['domainName', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">What is the domain name?</p>
          <p class="form-field__contextual">For example, in the URL https://business.yellowpages.ca/home/ the domain name would be yellowpages.ca</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Quel est le nom de domaine?</p>
          <p class="form-field__contextual">Par exemple, dans le URL https://business.yellowpages.ca/home/ le nom de domaine est yellowpages.ca</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['domainNameContinue', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Would you like to continue using this domain?</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Souhaitez-vous garder ce domaine?</p>
        </div>
      </InputText>
      <InputText @input="emitFieldData" :inputParams="['upToDateInfo', 0, false]" :en="en">
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
        v-show="fieldData.presenceTypes.indexOf('facebook') !== -1"
        @input="emitFieldData"
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
        v-show="fieldData.presenceTypes.indexOf('instagram') !== -1"
        @input="emitFieldData"
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
        v-show="fieldData.presenceTypes.indexOf('twitter') !== -1"
        @input="emitFieldData"
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
        v-show="fieldData.presenceTypes.indexOf('other') !== -1"
        @input="emitFieldData"
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
        v-show="fieldData.presenceTypes.indexOf('other') !== -1"
        @input="emitFieldData"
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
        v-show="fieldData.presenceTypes.indexOf('other') !== -1"
        @input="emitFieldData"
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
import ButtonNav from './ButtonNav'
import { presenceTypesOptions } from '../assets/presenceOptions'

export default {
  name: 'ExistingPresence',
  components: {
    IntroSubSection,
    InputText,
    InputCheckbox,
    ButtonNav
  },
  props: {
    fieldData: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      presenceTypesOptions: presenceTypesOptions
    }
  },
  computed: {
    en () {
      return document.documentElement.lang !== 'fr'
    },
    checkSocialVisibility () {
      const pTypes = this.fieldData.presenceTypes
      return ((pTypes.length === 1 && pTypes.indexOf('currentWebsite') === -1) || pTypes.length >= 2)
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
