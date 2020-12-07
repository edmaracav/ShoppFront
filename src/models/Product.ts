import Skus from './SkuModel'

export default class ProductModel {
    constructor (    
        Oid: string | null,
        Name: string | null,
        Image: string,
        Skus: Skus[]){}

}