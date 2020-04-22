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
  },
  beforeRouteEnter (to, from, next) {
    // if authenticate
    // eslint-disable-next-line no-constant-condition
    // if (false) {
    //   next()
    // } else {
    //   next(false)
    // }
    // eslint-disable-next-line no-constant-condition
    if (true) {
      next()
    } else {
      next(false)
    }
  }
}
</script>
