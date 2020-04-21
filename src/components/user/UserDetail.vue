<template>
  <div>
    <h3>Some user Details</h3>
    <p>User Loaded Has ID:{{$route.params.id}}</p>
    <router-link
      tag="button"
      class="btn btn-secondary"
      :to="'/user/'+$route.params.id+'/edit'"
    >Edit User</router-link>
  </div>
</template>
