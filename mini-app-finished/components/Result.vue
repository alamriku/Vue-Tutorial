<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
import {mapGetters} from 'vuex'
import * as types from '../store/type'
export default {
  computed: {
    // here three dots means spread operation in es-6
    ...mapGetters({
      counter: types.DOUBLE_COUNTER

    })

  }

}
</script>
