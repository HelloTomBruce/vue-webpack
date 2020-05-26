const addModules = {
    state: {
        count: 0
    },
    actions: {
        add: ({ commit }) => {
            return commit("add");
        }
    },
    mutations: {
        add: state => {
            return state.count++;
        }
    },
    getters: {
        getCount: state => {
            return state.count;
        }
    }
};

export default addModules;
