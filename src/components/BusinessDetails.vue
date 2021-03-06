<template>
  <section id="business-details" class="business-details section">
    <IntroSubSection :header="['Business Details', 'Données sur l’entreprise']" :subHeader="['Advertiser Profile', 'Profile de l’annonceur']" :en="en">
      <p slot="en" class="sub-section__intro">Congratulations on your new website product! The first step in our production process is to learn a little bit more about your business and its goals. This information will help our web team strategize a plan before the next scheduled phone consultation. Your responses here will help us strengthen your online presence.</p>
      <p slot="fr" class="sub-section__intro">Félicitations sur votre nouveau site Web! La première étape pour nous est d’en apprendre un peu plus sur votre entreprise et vos objectifs. Cette information permettra à notre équipe Web d’élaborer un plan d’action avant notre prochaine conversation téléphonique. Vos réponses nous aideront à établir une meilleure présence en ligne pour vous.</p>
    </IntroSubSection>
    <div class="sub-section lg">
      <h3 class="sub-section__header">{{ en ? 'Business Info' : 'Information sur l’entreprise' }}</h3>
      <p v-if="en" class="sub-section__intro">Let's start with some of the basic business details.</p>
      <p v-if="!en" class="sub-section__intro">Commençons par les infos de base de votre entreprise.</p>
      <InputText v-model="fieldData.displayedName" @error="handleError" :inputParams="['displayedName', 0, true]" :en="en">
        <div slot="en">
          <p class="form-field__question">Business name to be displayed on site</p>
          <p class="form-field__contextual">Does your online logo match the name printed on your business cards? For example, if you represent a private limited company, do you spell your name Ltd. (with a period), Ltd (without the period), LTD (all caps), or Limited (spelled out)?</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Nom de l‘entreprise à apparaitre sur le site</p>
          <p class="form-field__contextual">Quand on parle de branding, la continuité est très importante. Est-ce que le logo que vous avez en ligne est le même que celui qui est sur votre carte d’affaires? Par exemple, si votre compagnie est une société à responsabilité limitée, vous épelez votre nom Ltd. (avec un point), Ltd (sans le point), LTD (tout en majuscules), ou Limited (en toutes lettres)? N’oubliez pas, même une petite différence d’orthographe dans votre nom entre les différentes plateformes peut porter à confusion.</p>
        </div>
      </InputText>
      <InputText v-model="fieldData.primaryContact" @error="handleError" :inputParams="['primaryContact', 0, true]" :en="en">
        <div slot="en">
          <p class="form-field__question">Primary point of contact for our website development team</p>
          <p class="form-field__contextual">Ask yourself, who is best suited to speak about the particulars of the business for the duration of the process?</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Personne à contacter en priorité par notre équipe de site Web</p>
          <p class="form-field__contextual">Posez-vous la question suivante : qui est la personne la plus compétente pour parler des spécificités de votre entreprise? Idéalement, cette personne est en mesure de donner des informations détaillées sur vos produits et services. C’est cette personne que nous appellerons  pour discuter du design et du texte du site une fois celui-ci complété ainsi que pour toutes questions que nous pourrions avoir sur les demandes de révision.</p>
        </div>
      </InputText>
      <InputCheckbox v-model="fieldData.displayedInfo" :inputParams="['displayedInfo', displayedContact, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Contact information to be displayed on site</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Coordonnées à apparaitre sur le site</p>
        </div>
      </InputCheckbox>
      <InputText v-model="fieldData.email" @error="handleError" :inputParams="['email', 0, false, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Email</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Courriel</p>
        </div>
      </InputText>
      <fieldset>
        <InputText v-model="fieldData.mainPhone" @error="handleError" :inputParams="['mainPhone', 0, true]" :en="en">
          <div slot="en">
            <p class="form-field__question">Main phone number</p>
          </div>
          <div slot="fr">
            <p class="form-field__question">Numéro de téléphone principal</p>
          </div>
        </InputText>
        <InputText v-model="fieldData.otherPhone" @error="handleError" :inputParams="['otherPhone', 1, false]" :en="en">
          <div slot="en">
            <p class="form-field__question">Additional phone numbers</p>
          </div>
          <div slot="fr">
            <p class="form-field__question">Autre (s) numéro (s) de téléphone</p>
          </div>
        </InputText>
      </fieldset>
      <fieldset>
        <InputText v-model="fieldData.mainAddress" @error="handleError" :inputParams="['mainAddress', 0, false]" :en="en">
          <div slot="en">
            <p class="form-field__question">Main business address</p>
          </div>
          <div slot="fr">
            <p class="form-field__question">Adresse principale</p>
          </div>
        </InputText>
        <InputText v-model="fieldData.otherAddress" @error="handleError" :inputParams="['otherAddress', 1, false]" :en="en">
          <div slot="en">
            <p class="form-field__question">Additional addresses</p>
          </div>
          <div slot="fr">
            <p class="form-field__question">Autre (s) adresse (s)</p>
          </div>
        </InputText>
      </fieldset>
    </div>
    <div class="sub-section lg">
      <h3 class="sub-section__header">{{ en ? 'Hours of Operation' : 'Heures d’ouverture' }}</h3>
      <InputText v-model="fieldData.monday" @error="handleError" :inputParams="['monday', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Monday</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Lundi</p>
        </div>
      </InputText>
      <InputText v-model="fieldData.tuesday" @error="handleError" :inputParams="['tuesday', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Tuesday</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Mardi</p>
        </div>
      </InputText>
      <InputText v-model="fieldData.wednesday" @error="handleError" :inputParams="['wednesday', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Wednesday</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Mercredi</p>
        </div>
      </InputText>
      <InputText v-model="fieldData.thursday" @error="handleError" :inputParams="['thursday', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Thursday</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Jeudi</p>
        </div>
      </InputText>
      <InputText v-model="fieldData.friday" @error="handleError" :inputParams="['friday', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Friday</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Vendredi</p>
        </div>
      </InputText>
      <InputText v-model="fieldData.saturday" @error="handleError" :inputParams="['saturday', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Saturday</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Samedi</p>
        </div>
      </InputText>
      <InputText v-model="fieldData.sunday" @error="handleError" :inputParams="['sunday', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Sunday</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Dimanche</p>
        </div>
      </InputText>
    </div>
    <div class="sub-section">
      <InputText v-model="fieldData.otherInfo" @error="handleError" :inputParams="['otherInfo', 1, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Are there any other notes you would like to provide regarding your business information?</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Y-a-t-il autre chose que vous désirez inclure dans vos coordonnées?</p>
        </div>
      </InputText>
    </div>
    <ButtonNav activeTab="businessDetails" @navigate="emitNav" :en="en" />
  </section>
</template>

<script>
import IntroSubSection from './IntroSubSection'
import InputText from './InputText'
import InputCheckbox from './InputCheckbox'
import ButtonNav from './ButtonNav'
import { displayedContact } from '../assets/businessInfoOptions'

export default {
  name: 'BusinessDetails',
  components: {
    IntroSubSection,
    InputText,
    InputCheckbox,
    ButtonNav
  },
  props: {
    fieldData: { required: true, type: Object },
    en: { required: true, type: Boolean }
  },
  data () {
    return {
      displayedContact: displayedContact
    }
  },
  computed: {
    anyErrors () {
      const fieldsToCheck = ['primaryContact', 'displayedName', 'mainPhone']
      const err = fieldsToCheck.reduce((truthy, current) => truthy || this.fieldData[current].length === 0, false)
      return err
    }
  },
  methods: {
    emitNav (tab) {
      this.$emit('navigate', tab)
    },
    handleError () {
      this.$emit('error', this.anyErrors)
    }
  }
}
</script>
