import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    count: 0
};

const actions = {
    add: ({ commit }) => {
        return commit("add");
    }
};

const mutations = {
    add: state => {
        return state.count++;
    }
};

const getters = {
    getCount: state => {
        return state.count;
    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});
