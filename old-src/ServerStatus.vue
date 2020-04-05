<template>
  <div id="app">
    {{status}}
    <button @click="ChangeStatus">Change Status</button>
    <hr>
  </div>
</template>

<script>
  //local component
export default {
  data: function () {
    return {
      status: 'Critical'
    }
  },
  methods: {
    ChangeStatus: function () {
      if (this.status === 'Critical') {
        this.status = 'normal'
      } else {
        this.status = 'Critical'
      }
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
