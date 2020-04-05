<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name:{{child}}</p>
        <button @click="resetName">Reset</button>
        <button @click="resetFn()">Reset</button>
    </div>
</template>

<script>
export default {
  // props: ['child'],
  props: {
    // child: [String, Array]
    child: {
      type: String,
      default: 'default',
      // type: Object,
      // default: function () {
      //   return {name: 'default'}
      // },
      required: true
    },
    // this is a call back function from user
    resetFn: Function
  },
  methods: {
    // switchName () {
    //   return this.child.split('').reverse().join('')
    // }
    resetName () {
      this.child = 'Max'
      this.$emit('nameWasReset', this.child)
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
