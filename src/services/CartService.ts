import { AxiosResponse, AxiosError } from 'axios';
import $http from '../router/http';
import ProductResponse from '../models/ProductResponse';
import CartResponse from '../models/CartResponse';
import CartModel from '../models/CartModel';
import Urls from './Urls';
import AddProductModel from '../models/AddProductModel';

export default class CartService {
    private readonly endpoint: string;
    private headers: any;

    constructor() {
        this.endpoint = 'api/cart/'
    }


    GetCart(payload: CartModel): Promise<CartResponse> {
        return new Promise((resolve, reject) => {

            $http.get('http://ec2-54-242-91-144.compute-1.amazonaws.com:8080/' + this.endpoint + payload)
                .then((res: AxiosResponse<CartResponse>) => {
                    resolve(res.data);
                })
        }
        )
    }


    AddProduct(product: AddProductModel): Promise<CartResponse> {
        return new Promise((resolve, reject) => {

            $http.post('http://ec2-54-242-91-144.compute-1.amazonaws.com:8080/'
                + this.endpoint
                + product.cartId
                + '/addProduct/'
                + product)
                .then((res: AxiosResponse<CartResponse>) => {
                    resolve(res.data);
                })
        }
        )
    }

    UpdateProduct(product: AddProductModel): Promise<CartResponse> {
        return new Promise((resolve, reject) => {

            $http.put('http://ec2-54-242-91-144.compute-1.amazonaws.com:8080/'
                + this.endpoint
                + product.cartId
                + '/updateProduct/'
                + product)
                .then((res: AxiosResponse<CartResponse>) => {
                    resolve(res.data);
                })
        }
        )
    }

    DeleteProduct(product: AddProductModel): Promise<CartResponse> {
        return new Promise((resolve, reject) => {

            $http.delete('http://ec2-54-242-91-144.compute-1.amazonaws.com:8080/'
                + this.endpoint
                + product.cartId
                + '/deleteProduct/'
                + product)
                .then((res: AxiosResponse<CartResponse>) => {
                    resolve(res.data);
                })
        }
        )
    }

}