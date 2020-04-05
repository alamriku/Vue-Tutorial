<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button @click="selectedComponent='appQuote'">Quote</button>
              <button @click="selectedComponent='appAuthor'">Author</button>
              <button @click="selectedComponent='appNew'">New</button>
              <p>{{selectedComponent}}</p>
              <hr>
              <keep-alive>
                <component :is="selectedComponent"></component>
              </keep-alive>

<!--            <app-Quote>-->
<!--              <h1 slot="title">{{quoteTitle}}</h1>-->
<!--              <span slot="subtitle">{{subtitle}}</span>-->
<!--              <p slot="content">A wonderful Quote</p>-->
<!--            </app-Quote>-->
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote'
import Author from './components/Author'
import New from './components/New'
export default {
  data: function () {
    return {
      quoteTitle: 'The Quote from dynamic data',
      subtitle: 'the second subtitle',
      selectedComponent: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New

  }
}
</script>

<style scoped>

</style>
