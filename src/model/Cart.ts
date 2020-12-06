import Product from './Product';

export default interface Cart {
    id: string | null;
    products: Product[];
    cartTotalPrice: number;
    cartTotalProducts: number;
}