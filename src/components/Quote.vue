<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .panel-body{
    font-family: 'Tangerine',cursive;
    font-size: 50px;
    color:#bebebe;
  }
  .quote{
    cursor: pointer;
    color:#330d0d;
  }
  .quote:hover{
    background-color:#ffe2e2;
  }
</style>
