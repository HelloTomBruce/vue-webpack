import Vue from "vue";
import Vuex from "vuex";
import PlayStore from "./play";
import AddStore from "./add";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        play: PlayStore,
        add:  AddStore
    }
});
