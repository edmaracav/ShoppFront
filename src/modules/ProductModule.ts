import { ActionContext } from 'vuex';
import ProductModel from '../models/Product';
import ProductResponse from '../models/ProductResponse';
import CartModel from '../models/CartModel';
import ProductService from '../services/ProductService';
import { ICartState } from '../interfaces/ICartState';

const state: ICartState = {
    Products: [],
    Cart: null
}

export default {

    namespaced: true,
    state: state,
    getters: {

    },
    mutations: {
        SET_PRODUCTS(state: ICartState, products: ProductModel[]) {
            state.Products = products;
        }
    },
    actions: {
        GetProducts({ state, commit }: ActionContext<ProductResponse, any>) {

            return new Promise((resolve, reject) => {
                new ProductService().GetProducts()
                    .then((res) => {
                        commit('SET_PRODUCTS', res)
                        resolve(res);
                    })
                    .catch(error => reject(error));
            })
        }

    }

}