<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>{{userAge}}</p>
        <button @click="editAge">EditAge</button>
    </div>
</template>

<script>
export default {
  // props: {
  //   userAge: {
  //     required: true
  //   }
  // },
  props: [ 'userAge' ],
  methods: {
    editAge: function () {
      this.userAge = 30
      this.$emit('ageWasEdited', this.userAge)
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
