<template>
  <div class="">
    <h1>Filters & Mixins</h1>

    <hr>
    <input type="text" v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits" v-bind:key="fruit.index">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import {fruitMixin} from '../fruitMixin'

export default {
  mixins: [fruitMixin],
  created () {
    console.log('Inside List Created HOok')
  }
}
</script>

<style>

</style>
