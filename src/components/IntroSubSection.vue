<template>
  <div class="intro sub-section">
    <h2 class="section__header">{{ en ? header[0] : header[1] }}</h2>
    <h3 class="sub-section__header">{{ en ? subHeader[0] : subHeader[1] }}</h3>
    <slot v-if="en" name="en"></slot>
    <slot v-if="!en" name="fr"></slot>
  </div>
</template>

<script>
export default {
  name: 'IntroSubSection',
  props: {
    header: { required: true, type: Array },
    subHeader: { required: true, type: Array },
    en: { required: true, type: Boolean }
  }
}
</script>
