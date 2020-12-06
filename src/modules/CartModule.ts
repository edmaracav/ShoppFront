import { ActionContext } from 'vuex';
import ProductModel from '../models/ProductModel';
import ProductResponse from '../models/ProductResponse';
import CartModel from '../models/CartModel';
import SkuModel from '../models/SkuModel';
import ProductService from '../services/ProductService';
import { State } from 'vuex-class';



export default {
 
    namespaced: true,
    state: State,
    getters: {

    },
    mutations: {

    },
    actions: {
        GetProducts({ dispatch, state, commit} : ActionContext<ProductResponse, any>){

            return new Promise((resolve, reject) => {
                new ProductService().GetProducts()
                .then((res) => {
                    resolve(res);
                })
                .catch(error => reject(error));
            })


        }
    }
    
}