import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from './axios-auth'
import globalAxios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser (state, Userdata) {
      state.user = Userdata
    }
  },
  actions: {
    signup ({commit, dispatch}, authData) {
      axiosInstance.post('/accounts:signUp?key=AIzaSyBYltE4EiZLubYiHRDFCRSYRGrZVXpEm3w', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          dispatch('storeUser', authData)
        })
        .catch(error => console.log(error))
    },
    login ({commit}, authData) {
      axiosInstance.post('/accounts:signInWithPassword?key=AIzaSyBYltE4EiZLubYiHRDFCRSYRGrZVXpEm3w', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch(error => console.log(error))
    },
    storeUser ({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .then(err => console.log(err))
    },
    fetchUser ({commit, state}) {
      if (!state.idToken) {
        return
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
        .then(res => {
          console.log(res)
          const users = []
          const data = res.data
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          commit('storeUser', users[0])
        })

        .catch(err => console.log(err))
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
})
