<template>
  <div>
    <h3>Some user Details</h3>

    <router-link
      tag="button"
      class="btn btn-secondary"
      :to="link"
    >Edit User</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      link: {
        name: 'userEdit',
        params: {
          id: this.$route.params.id
        },
        query: {
          locale: 'en', q: 100
        },
        hash: '#data'
      }
    }
  }
}
</script>
