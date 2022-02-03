import {forEach} from "core-js/stable/dom-collections";

const state = () => ({
    storeValue: "online",
    tasks: []
})

const getters = {
    getTasks: (state) => {
        return state.tasks
    },
}

const actions = {}

const mutations = {
    setStoreValue(state, payload) {
        state.storeValue = payload
    },
    setTask(state, payload) {
        // state.tasks = payload
        state.tasks.push(payload);
    },
    removeTask(state, payload) {
        if (state.tasks.length == 1 ) {
            state.tasks = [];
        } else {
            state.tasks.splice(payload, 1);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
} 