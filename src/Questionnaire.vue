<template>
  <main id="questionnaire">
    <BusinessDetails />
  </main>
</template>

<script>
import BusinessDetails from './components/BusinessDetails'

export default {
  name: 'app',
  components: {
    BusinessDetails
  }
}
</script>

<style>
#questionnaire {
  width: 500px;
}
label {
  margin-bottom: 20px;
}
label, input, textarea {
  display: block;
}
</style>
