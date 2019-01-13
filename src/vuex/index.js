import Vue from "vue";
import Vuex from "vuex";
import store from "./modules/store.js"


Vue.use(Vuex);
const userInfo = data => {
    return data.store;
};

export default new Vuex.Store({
    modules: {
        store
    },
    getters: {
        userInfo
    },
    strict: process.env.NODE_ENV !== "production"
});
