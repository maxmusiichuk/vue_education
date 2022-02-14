const state = () => ({
    tasks: []
})

const getters = {
    getTasks: (state) => {
        return state.tasks
    },
}

const actions = {
}

const mutations = {
    setTask(state, payload) {
        state.tasks.push(payload);
    },
    removeTask(state, payload) {
        if (state.tasks.length == 1 ) {
            state.tasks = [];
        } else {
            state.tasks.splice(payload, 1);
        }
    },
    changeTaskStatus(state, payload){
    state.tasks = [];
    state.tasks = payload;
    },

    clearAllTasks(state, payload){
    state.tasks = [];
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
} 