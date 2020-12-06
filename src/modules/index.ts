import Vue from 'vue';
import Vuex from 'vuex';
import CartModule from './CartModule';


Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        CartModule
    }
});
export default store;