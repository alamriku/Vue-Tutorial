<template>

  <div>
    <app-server-status v-for="server in 5"></app-server-status>
  </div>

</template>

<script>
// local component
import ServerStatus from './ServerStatus'
export default {
  components: {
    'app-server-status': ServerStatus
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
