<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks {{ stringCounter }}</p>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import * as types from '../store/type'
export default {
  computed: {
    // here three dots means spread operation in es-6
    ...mapGetters({
      doubleCounter: types.DOUBLE_COUNTER,
      stringCounter: types.CLICK_COUNTER
    })

  }

}
</script>
