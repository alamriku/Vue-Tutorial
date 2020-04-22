<template>
  <div>
    <button class="btn btn-primary" @click="asynchInrement({by:50,duration:500})">Increment</button>
    <button class="btn btn-primary" @click="asynchDecrement({by:50,duration:500})">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'asynchInrement',
      'asynchDecrement'
    ])

  }
}
</script>
