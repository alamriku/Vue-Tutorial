<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built in directive</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Custom in directive</h1>
<!--          <p v-highlight="'red'">Color this</p>-->
          <p v-highlight.delayed="'red'">Color this</p>
        </div>
      </div>
    </div>
</template>

<script>

export default {

}
</script>

<style>

</style>
