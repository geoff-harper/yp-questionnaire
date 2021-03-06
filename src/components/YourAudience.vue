<template>
  <section id="your-audience" class="your-audience section">
    <IntroSubSection :header="['Your Audience', 'Votre audience']" :subHeader="['Your Goals', 'Vos objectifs']" :en="en">
      <p slot="en" class="sub-section__intro">Let's talk about who you are looking to attract and what information you would like to share on your new website.</p>
      <p slot="fr" class="sub-section__intro">Parlons un peu des personnes que vous souhaitez attirer sur votre site Web et de quel type d’information vous désirez partager.</p>
    </IntroSubSection>
    <div class="sub-section lg">
      <h3 class="sub-section__header">{{ en ? 'The Visuals' : 'Examples du design'}}</h3>
      <p v-if="en" class="sub-section__intro">It is important to consider the feeling you wish to convey with your new website. Explore <a href="http://www.wss.yellowpages.ca/portfolio/index.html" target="_blank">YP’s website portfolio</a> and select some of the sites you like the looks of the most. Record their reference codes (e.g., WEB002) in the fields below. Or, feel free to send along the URLs of any other attractive websites you may have found elsewhere.</p>
      <p v-if="!en" class="sub-section__intro">Il est important de penser à l’image que vous voulez transmettre à travers votre nouveau site Web. Explorez <a href="http://www.wss.yellowpages.ca/portfolio/index_fr.html" target="_blank">le portfolio des sites Web des PJ</a> et sélectionnez les trois sites que vous préférez visuellement. Entrez leur référence (p. ex. WEB002) dans les champs ci-dessous. N’hésitez pas à nous envoyer également les addresses URL de sites que vous aimez que vous auriez trouvé par vous-mêmes.</p>
      <InputText v-model="fieldData.example1" :inputParams="['example1', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Website #1</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Site Web #1</p>
        </div>
      </InputText>
      <InputText v-model="fieldData.example2" :inputParams="['example2', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Website #2</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Site Web #2</p>
        </div>
      </InputText>
      <InputText v-model="fieldData.example3" :inputParams="['example3', 0, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Website #3</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Site Web #3</p>
        </div>
      </InputText>
    </div>
    <div class="sub-section">
      <h3 class="sub-section__header">{{ en ? 'Demographic Info' : 'Information démographique'}}</h3>
      <InputText v-model="fieldData.targetDemo" :inputParams="['targetDemo', 1, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Who is your target demographic?</p>
          <p class="form-field__contextual">Think about the customers you’ve helped in the past. Whether your focus is B2C (business-to-consumer) or B2B (business to business), you need to direct your efforts accordingly.</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Votre cible démographique</p>
          <p class="form-field__contextual">Quelle est votre cible démographique? Pensez aux clients que vous avez servis par le passé. Selon que vous vouliez miser sur les B2C (entreprise-consommateur) ou les B2B (interentreprises), vous devez concentrer vos efforts sur votre cible.</p>
        </div>
      </InputText>
      <InputText v-model="fieldData.firstThing" :inputParams="['firstThing', 1, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">First Impression</p>
          <p class="form-field__contextual">What is the first thing you would like potential clients to see when visiting your website? It is always important to set the right tone. You only get one chance to make a great first impression.</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Première impression</p>
          <p class="form-field__contextual">Quelle est la première chose que vous voulez que vos client potentiels voient sur votre site? Il est toujours important de donner le ton juste. Vous n’avez qu’une seule chance de faire une bonne première impression.</p>
        </div>
      </InputText>
      <InputCheckbox v-model="fieldData.suppliedContent" :inputParams="['suppliedContent', suppliedContentTypes, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">Images/Content</p>
          <p class="form-field__contextual">Simply put, nobody understands your business as well as you. Your designated web team will do their best to provide you with content that accurately reflects your business; however, the more specific and relevant the copy and photos are to your particular business the better. Will you be supplying us with documentation, images, logos? Click all that apply.</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Images/Contenu</p>
          <p class="form-field__contextual">Pour résumer, personne ne comprend ce que vous faites mieux que vous. Votre équipe Web attitrée fera de son mieux pour créer pour vous du contenu qui reflète votre entreprise; cependant, plus le contenu et les images sont spécifiques et pertinentes par rapport à ce que vous faites, mieux c’est. Allez-vous nous envoyer de la documentation, des images, des logos? Cochez tout ce qui s’applique.</p>
        </div>
      </InputCheckbox>
      <InputText v-model="fieldData.stockImagesSubjects" :inputParams="['stockImagesSubjects', 1, false]" :en="en">
        <div slot="en">
          <p class="form-field__question">What type of stock images would you like to see?</p>
          <p class="form-field__contextual">If you do not have access to quality photos of your business, YP can supply you with generic high-quality images from our stock photo provider. Simply let us know the type of imagery you would like to see, and we will find a suitable option (e.g. a family with bright smiles for a dental site, engine parts for an auto mechanic, etc.).</p>
        </div>
        <div slot="fr">
          <p class="form-field__question">Quel genre de photos de banque d’images souhaitez-vous voir?</p>
          <p class="form-field__contextual">Si vous ne pouvez obtenir des photos de bonne qualité de votre entreprise, PJ peut vous fournir des images génériques de haute qualité, provenant de la banque d’images avec laquelle nous sous-traitons. Dites-nous simplement le genre d’images que vous souhaitez voir sur votre site, et nous trouverons la solution adéquate (p. ex. une famille au beau sourire pour un site de dentiste, des pièces détachées de moteur pour un garage, etc.)</p>
        </div>
      </InputText>
    </div>
    <ButtonNav activeTab="yourAudience" @navigate="emitNav" :en="en" />
  </section>
</template>

<script>
import IntroSubSection from './IntroSubSection'
import InputText from './InputText'
import InputCheckbox from './InputCheckbox'
import ButtonNav from './ButtonNav'
import { suppliedContentTypes } from '../assets/audienceOptions'

export default {
  name: 'YourAudience',
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
      suppliedContentTypes: suppliedContentTypes
    }
  },
  methods: {
    emitFieldData (elem, value, errorPresent) {
      this.$emit('update', 'yourAudience', elem, value)
      this.$emit('error', errorPresent)
    },
    emitNav (tab) {
      this.$emit('navigate', tab)
    }
  }
}
</script>
