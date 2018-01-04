<template>
  <div class="intro sub-section">
    <h2 class="section__header">{{ header }}</h2>
    <h3 class="section__sub-header">{{ subHeader }}</h3>
    <p class="section__intro">
      <slot>Fallback text, need some intro text for this section.</slot>
    </p>
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
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
