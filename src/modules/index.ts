import Vue from 'vue';
import Vuex from 'vuex';
import ProductModule from './ProductModule';
import CartModule from './CartModule';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        ProductModule,
        CartModule
    }
});
export default store;