import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    panelBody: {
        account: "",
        purchase: "",
        remark: "",
        date: ""
    }
  },
  mutations: {
      setUserData(state, { userData }) {
          state.panelBody.account = userData.account;
          state.panelBody.purchase = userData.purchase;
          state.panelBody.remark = userData.remark;
          state.panelBody.date = userData.date;
      }
  },
  actions: {},
  getters: {},
});