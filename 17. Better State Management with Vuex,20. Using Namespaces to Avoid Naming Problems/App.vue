<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result ></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <app-another-counter></app-another-counter>
        <hr>
        <input type="text" v-model="value" >
        <p>{{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter'
import AnotherCounter from './components/AnotherCounter'
import Result from './components/Result'
import AnotherResult from './components/AnotherResult'
import * as types from './store/type'
export default {
  computed: {
    value: {
      get () {
        return this.$store.getters[types.VALUE]
      },
      set (value) {
        this.$store.dispatch(types.UPDATE_VALUE, value)
      }

    }
  },

  components: {
    appCounter: Counter,
    appAnotherCounter: AnotherCounter,
    appResult: Result,
    appAnotherResult: AnotherResult
  }
}
</script>
