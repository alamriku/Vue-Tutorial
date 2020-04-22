const state = {
  counter: 0
}

const getters = {
  doubleCounter: state => {
    return state.counter * 2
  },
  stringCounter: state => {
    return state.counter + ' Clicks'
  },
  value: state => {
    return state.value
  }
}
const mutations = {
  increment: (state, payload) => {
    console.log('mutation')
    state.counter += payload
  },
  decrement: (state, payload) => {
    state.counter -= payload
  }

}

const actions = {
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
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}
