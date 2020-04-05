<template>
  <div class="bg-danger">
    <div class="title">
      <slot name="title"></slot>
      <span style="color: #cccccc"><slot name="subtitle">The New</slot></span>
      <button @click="counter++">Increase</button>
    <p>{{counter}}</p>
    </div>
    <hr>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      counter: 0
    }
  },
  destroyed () {
    console.log('destroyed!')
  },
  deactivated () {
    console.log('deactivated')
  },
  activated () {
    console.log('activated')
  }
}
</script>

<style scoped>
  div{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
  h1{
    color: red;
  }
  .title{
    font-family: "Rage Italic";
    font-palette: dark;
    font-style: italic;
  }
</style>
