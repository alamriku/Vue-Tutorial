<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
            <app-Quote>
              <h1 slot="title">{{quoteTitle}}</h1>
              <span slot="subtitle">{{subtitle}}</span>
              <p slot="content">A wonderful Quote</p>
            </app-Quote>
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote'
export default {
  data: function () {
    return {
      quoteTitle: 'The Quote from dynamic data',
      subtitle: 'the second subtitle'
    }
  },
  components: {
    appQuote: Quote
  }
}
</script>

<style scoped>

</style>
