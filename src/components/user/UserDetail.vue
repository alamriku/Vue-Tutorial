<template>
  <div>
    <h3>Some user Details</h3>
    <p>User Loaded Has ID:{{$route.params.id}}</p>
    <router-link
      tag="button"
      class="btn btn-secondary"
      :to="{name:'userEdit',params:{ id:$route.params.id }, query:{ locale:'en',q:100 } }"
    >Edit User</router-link>
  </div>
</template>
