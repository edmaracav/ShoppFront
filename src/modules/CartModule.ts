import { ActionContext } from 'vuex';
import ProductModel from '../models/Product';
import ProductResponse from '../models/ProductResponse';
import CartResponse from '../models/CartResponse';
import CartModel from '../models/CartModel';
import SkuModel from '../models/SkuModel';
import ProductService from '../services/ProductService';
import CartService from '../services/CartService';
import { State } from 'vuex-class';
import { ICartState } from '../interfaces/ICartState';
import AddProductModel from '../models/AddProductModel';


const state: ICartState = {
    Products: [],
    Cart: null
}
type ProcessesContext = ActionContext<ICartState, any>;

export default {

    namespaced: true,
    state: state,
    getters: {

    },
    mutations: {
        SET_CART(state: ICartState, cart: CartModel) {
            state.Cart = cart;
        }


    },
    actions: {

        GetCart({ state, commit }: ActionContext<CartResponse, any>, payload: CartModel){
            return new Promise((resolve, reject) => {
                new CartService().GetCart(payload)
                    .then((res) => {
                        commit('SET_CART', res)
                        resolve(res);
                        console.log("get cart " + res);
                    })
                    .catch(error => reject(error));
            })


        },

        AddProductToCart({ state, commit }: ActionContext<CartResponse, any>, payload: AddProductModel){
            return new Promise((resolve, reject) => {
                new CartService().AddProduct(payload)
                    .then((res) => {
                        commit('SET_CART', res)
                        resolve(res);
                        console.log("state products " + state.Cart);
                    })
                    .catch(error => reject(error));
            })
        },


        UpdateProduct({ state, commit }: ActionContext<CartResponse, any>, payload: AddProductModel){
            return new Promise((resolve, reject) => {
                new CartService().UpdateProduct(payload)
                    .then((res) => {
                        commit('SET_CART', res)
                        resolve(res);
                        console.log("state products " + state.Cart);
                    })
                    .catch(error => reject(error));
            })
        },

        DeleteProduct({ state, commit }: ActionContext<CartResponse, any>, payload: AddProductModel){
            return new Promise((resolve, reject) => {
                new CartService().DeleteProduct(payload)
                    .then((res) => {
                        commit('SET_CART', res)
                        resolve(res);
                        console.log("state products " + state.Cart);
                    })
                    .catch(error => reject(error));
            })
        }


    }

}