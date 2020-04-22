import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line no-new
export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    },
    stringCounter: state => {
      return state.counter + ' Clicks'
    },
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
    increment: state => {
      state.counter++
    },
    decrement: state => {
      state.counter--
    }

  }
})
