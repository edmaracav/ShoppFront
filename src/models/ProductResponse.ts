import ProductModel from './ProductModel'

export default class ProductResponse {
    constructor(public products: ProductModel[]) { }
}