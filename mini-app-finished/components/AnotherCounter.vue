<template>
  <div>
    <button class="btn btn-primary" @click="asynchInrement({by:50,duration:500})">Increment</button>
    <button class="btn btn-primary" @click="asynchDecrement({by:50,duration:500})">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import * as types from '../store/type'
export default {
  methods: {
    ...mapActions({
      asynchInrement: types.COUNTER_INCREMENT_ASYNC,
      asynchDecrement: types.COUNTER_DECREMENT_ASYNC
    })

  }
}
</script>
