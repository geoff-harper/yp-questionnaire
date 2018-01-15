<template>
  <div class="intro sub-section">
    <h2 class="section__header">{{ header }}</h2>
    <h3 class="sub-section__header">{{ subHeader }}</h3>
    <slot v-if="true" name="en"></slot>
    <slot v-if="false" name="fr"></slot>
  </div>
</template>

<script>
export default {
  name: 'IntroSubSection',
  props: {
    header: {
      required: true,
      type: String
    },
    subHeader: {
      required: true,
      type: String
    }
  }
}
</script>
