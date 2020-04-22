import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
Vue.use(Vuex)

// eslint-disable-next-line no-new
export const store = new Vuex.Store({
  state: {

    value: 0
  },
  getters: {
    value: state => {
      return state.value
    }
  },
  mutations: {
    // increment: (state, payload) => {
    //   state.counter += payload
    // },
    // decrement: (state, payload) => {
    //   state.counter -= payload
    // },
    // updateValue: (state, payload) => {
    //   state.counter = payload
    // }
    // paylaod = 100 is coming form increment click event in anotherCounter file
    updateValue: (state, payload) => {
      state.value = payload
    }
  },
  actions: {
    updateValue ({commit}, payload) {
      commit('updateValue', payload)
    }
  },
  modules: {
    counter
  }
})
