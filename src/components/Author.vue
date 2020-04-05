<template>
  <div class="bg-primary">
    <div class="title">
      <slot name="title"></slot>
      <span style="color: #cccccc"><slot name="subtitle">The Author</slot></span>
    </div>
    <hr>
    <slot name="content"></slot>
  </div>
</template>

<script>

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
