<template>
  <div class="row">
    <app-Quote v-for="(quote,index) in quotes"  :key="index" @click.native="deleteQuote(index)">{{quote}}</app-Quote>
  </div>
</template>

<script>
import Quote from './Quote'
export default {
  props: ['quotes'],
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote (index) {
      this.$emit('quoteDeleted', index)
    }
  }
}
</script>

<style scoped>

</style>
