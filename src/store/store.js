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
    // paylaod = 100 is coming form increment click event in anotherCounter file
    increment: (state, payload) => {
      console.log('mutation')
      state.counter += payload
    },
    decrement: (state, payload) => {
      state.counter -= payload
    },
    updateValue: (state, payload) => {
      state.value = payload
    }

  },
  actions: {
    increment: ({commit}, payload) => {
      commit('increment', payload)
    },
    decrement: ({commit}, payload) => {
      commit('decrement', payload)
    },
    // this below code is for only asynchronous task
    asynchInrement: ({commit}, payload) => {
      setTimeout(() => {
        commit('increment', payload.by)
      }, payload.duration)
    },
    asynchDecrement: ({commit}, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by)
      }, payload.duration)
    },
    updateValue ({commit}, payload) {
      commit('updateValue', payload)
    }
  }
})
