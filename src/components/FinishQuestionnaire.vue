<template>
  <section id="finish-questionnaire" :class="['finish-questionnaire', 'section', !submitted ? 'margin': null]">
    <IntroSubSection :header="['Finish Questionnaire', 'Pour terminer']" :subHeader="['Finishing Up', 'Pour terminer']" :en="en">
      <p slot="en" class="sub-section__intro">Your insights and opinions help us do a better job. Together we can create the ideal showcase for your business! We appreciate your input. Feel free to review your answers and make any necessary changes. Once complete, click the "Complete Questionionnaire" button. This form will be added to your file as we prepare for your phone consultation.</p>
      <p slot="fr" class="sub-section__intro">Vos connaissances et votre avis nous permettent de faire un meilleur travail. Ensemble nous pouvons créer la vitrine idéale pour votre entreprise! Nous apprécions votre contribution. N’hésitez pas à verifier vos réponses et à apporter tout changement qui vous semble nécessaire. Une fois complété, cliquez le bouton Envoyer le questionnaire. Ce formulaire sera ajouté à votre dossier pendant la préparation de votre consultation téléphonique.</p>
    </IntroSubSection>
    <div v-if="!submitted" class="submit-section">
      <input type="submit" :value="en ? 'Complete Questionnaire' : 'Envoyer le questionnaire'" class="button">
    </div>
    <transition name="slide-fade" mode="out-in">
      <div v-show="submitted" class="sub-section thank-you">
        <h3 class="sub-section__header">{{ en ? 'Thank You' : 'Merci' }}</h3>
        <div v-if="en" class="thank-you__third">
          <p class="sub-section__intro">If you’re looking for more helpful hints on the website design process prior to your next consultation, please review the following YP document. It contains practical information on everything from the visual components to the written copy and more.</p>
          <a @click="trackPostSubmit('leaveBehind')" class="button" href="/uploads/welcome_to_your_website-en.pdf" target="_blank">Welcome to Your Website</a>
        </div>
        <div v-if="!en" class="thank-you__third">
          <p class="sub-section__intro">Si vous souhaitez obtenir plus de conseils pratiques sur le processus du design pour un site Web avant votre consultation téléphonique, veuillez consulter le document suivant des PJ. Il contient des tonnes d’informations pratiques, que ce soit sur les éléments visuels, la rédaction du texte et bien plus encore.</p>
          <a @click="trackPostSubmit('leaveBehind')" class="button" href="/uploads/welcome_to_your_website-fr.pdf" target="_blank">Bienvenu sur votre site</a>
        </div>
        <div v-if="en" class="thank-you__third">
          <p class="sub-section__intro">Take a look at YP’s online portfolio. Don’t worry about the type of business being featured, just focus on the visual design that appeals to you the most. Each website is numbered (e.g., WEB002) for reference when speaking with your YP representative.</p>
          <a @click="trackPostSubmit('portfolio')" class="button" href="http://www.wss.yellowpages.ca/portfolio/index.html" target="_blank">YP Website Portfolio</a>
        </div>
        <div v-if="!en" class="thank-you__third">
          <p class="sub-section__intro">Consultez le portfolio des PJ en ligne. Ne vous préoccupez pas du type d’entreprise présentée, concentrez-vous sur les éléments visuels que vous aimez le plus. Chaque site est numéroté (p. ex. WEB002) pour référence lorsque vous parlerez à votre représentant PJ.</p>
          <a @click="trackPostSubmit('portfolio')" class="button" href="http://www.wss.yellowpages.ca/portfolio/index_fr.html" target="_blank">Portfolio de sites Web PJ</a>
        </div>
        <div v-if="en" class="thank-you__third">
          <p class="sub-section__intro">As a YP customer, you have full online access to view your website’s analytics, make updates, pay bills and learn more about the range of products and services we provide. Stay connected and make the most of your purchase with this useful resource.</p>
          <a @click="trackPostSubmit('yp4B')" class="button" href="https://business.yellowpages.ca/" target="_blank">YP4 Business Centre</a>
        </div>
        <div v-if="!en" class="thank-you__third">
          <p class="sub-section__intro">En tant que client des PJ, vous avez un accés en ligne complet pour consulter les analyses Internet, faire des changements, payer vos factures et en apprendre plus sur la gamme des produits et services que nous offrons. Restez connecté et profitez au mieux de votre achat grâce à ces ressources utiles.</p>
          <a @click="trackPostSubmit('yp4B')" class="button" href="https://business.yellowpages.ca/" target="_blank">YP4 Centre d’affaires</a>
        </div>
      </div>
    </transition>
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
    fieldData: { type: Object, required: true },
    submitted: { type: Boolean }
  },
  data () {
    return {}
  },
  computed: {
    en () {
      return document.documentElement.lang !== 'fr'
    }
  },
  methods: {
    trackPostSubmit (button) {
      switch (button) {
        case 'leaveBehind':
          window.ga('send', 'event', 'Post-submit resources', 'Leave behind PDF')
          break
        case 'portfolio':
          window.ga('send', 'event', 'Post-submit resources', 'Portfolio')
          break
        case 'yp4B':
          window.ga('send', 'event', 'Post-submit resources', 'YP4 Business')
          break
        default:
          break
      }
    }
  }
}
</script>
