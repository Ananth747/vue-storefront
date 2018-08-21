import { Module } from 'vuex'
import RootState from '../../types/RootState'
import ShippingState from './types/ShippingState'

const shipping: Module<ShippingState, RootState> = {
  namespaced: true,
  state: {
    methods: []
  },
  mutations: {
    addMethod (state, shippingMethods) {
      state.methods.push(shippingMethods)
    },
    replaceMethods (state, shippingMethods) {
      state.methods = shippingMethods
    }
  },
  actions: {
    addMethod ({commit}, shippingMethod) {
      commit('addMethod', shippingMethod)
    },
    replaceMethods ({commit}, shippingMethods) {
      commit('replaceMethods', shippingMethods)
    }
  },
  getters: {
    shippingMethods (state) {
      return state.methods
    }
  }
}

export default shipping