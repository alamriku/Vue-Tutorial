<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUppercase | to-lowercase  }}</p>
              <hr>
              <button @click="fruits.push('Berries')">Add new Item</button>
              <input type="text" v-model="filterText">
              <ul>
                <li v-for="fruit in filteredFruits" v-bind:key="fruit.index">{{fruit}}</li>
              </ul>
              <app-list></app-list>
            </div>

        </div>

    </div>
</template>

<script>
import {fruitMixin} from './fruitMixin'
import List from './components/List'
export default {
  data () {
    return {
      text: 'hellow there!'

    }
  },
  mixins: [fruitMixin],
  filters: {
    toUppercase (value) {
      return value.toUpperCase()
    }
  },

  components: {
    appList: List
  }
}
</script>

<style>

</style>
