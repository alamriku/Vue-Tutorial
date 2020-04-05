<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>

        <button @click="changeName">Change My Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                 :resetFn="resetName" v-bind:child="parent" @nameWasReset="parent=$event"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  data: function () {
    return {
      parent: 'Max'
    }
  },
  methods: {
    changeName: function () {
      this.parent = 'new name'
    },
    // ths is a callback function send to userdetail
    resetName: function () {
      this.parent = 'this is from call back'
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
