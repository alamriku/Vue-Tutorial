<template>
    <div class="container">
      <app-header :quote-count="quotes.length" :max-quote="maxQuotes"></app-header>
      <app-new-quote @quoteAdded="newQuote($event)" ></app-new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted ="deleteQuote"></app-quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">Info:Click on a Quote to Delete it!</div>
        </div>
      </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid'
import NewQuote from './components/NewQuote'
import Header from './components/Header'
export default {
  data: function () {
    return {
      maxQuotes: 10,
      quotes: [
        'just a quote to see something'
      ]
    }
  },
  methods: {
    newQuote (quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('Please delete Quotes first')
      }
      this.quotes.push(quote)
    },
    deleteQuote (index) {
      alert(index)
      this.quotes.splice(index, 1)
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  }
}
</script>

<style>
</style>
