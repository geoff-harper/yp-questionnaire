<template>
  <main id="questionnaire">
    <BusinessDetails />
    <!-- <YourAudience /> -->
  </main>
</template>

<script>
import BusinessDetails from './components/BusinessDetails'
import YourAudience from './components/YourAudience'

export default {
  name: 'app',
  components: {
    BusinessDetails,
    YourAudience
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
