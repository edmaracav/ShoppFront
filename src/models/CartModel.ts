import Product from './ProductModel';

export default interface Cart {
    id: string | null;
    products: Product[];
    cartTotalPrice: number;
    cartTotalProducts: number;
}