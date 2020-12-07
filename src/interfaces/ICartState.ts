import ProductResponse from '../models/ProductResponse';
import ProductModel from '../models/Product'
import CartModel from '../models/CartModel'

export interface ICartState {
    Products: ProductModel;
    Cart: CartModel;
}