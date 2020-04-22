<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks {{ stringCounter }}</p>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    // here three dots means spread operation in es-6
    ...mapGetters([
      'doubleCounter',
      'stringCounter'
    ]),
    ourOwnComputedproperty () {
      return true
    }
  }

}
</script>
