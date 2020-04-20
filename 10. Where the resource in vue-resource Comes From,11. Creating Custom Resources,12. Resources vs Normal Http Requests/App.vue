<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1 class="text-center">Http</h1>
              <div class="form-group">
                <label for="UserName">UserName</label>
                <input type="text" v-model="user.username" id="UserName" class="form-control">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" v-model="user.email" id="email" class="form-control">
              </div>
              <button class="btn btn-primary" @click="submit">Submit</button>
              <hr>
              <button class="btn btn-primary" @click="fetchData()">Get Data</button>
              <ul class="list-group">
                <li class="list-group-item" :key="u.index" v-for="u in users">{{u.username}} - {{u.email}}</li>
              </ul>
            </div>

        </div>
      <hr>

    </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        email: ''
      },
      users: [],
      resource: {}
    }
  },
  methods: {
    submit () {
      // this.$http.post('data.json', this.user)
      //   .then(response => {
      //
      //   }, error => {
      //     console.log(error)
      //   })
      // this.resource.save({}, this.user)
      this.resource.saveAlt(this.user)
    },
    fetchData () {
      this.$http.get('data.json')
        .then(response => {
          return response.json()
        }).then(data => {
          const resultArray = []
          for (let key in data) {
            resultArray.push(data[key])
          }
          this.users = resultArray
        })
    }
  },
  created () {
    const customAction = {
      saveAlt: {method: 'POST', url: 'alternative.json'}
    }
    this.resource = this.$resource('data.json', {}, customAction)
  }
}
</script>
