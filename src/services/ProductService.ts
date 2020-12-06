import { AxiosResponse, AxiosError } from 'axios';
import $http from '../router/http';
import ProductResponse from '../models/ProductResponse'
import Urls from './Urls';

export default class ProductService {
    private readonly endpoint: string;
    private headers: any;

    constructor() {
        this.endpoint = 'api/product'
    }

    public GetProducts(): Promise<ProductResponse> {
        return new Promise((resolve, reject) => {

            $http.get('http://ec2-54-242-91-144.compute-1.amazonaws.com:8080/' + this.endpoint)
                .then((res: AxiosResponse<ProductResponse>) => {
                    resolve(res.data);
                })
        }
        )
    }

}

