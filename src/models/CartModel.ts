import Product from './Product';

export default interface Cart {
    Id: string | null;
    Products: Product[] | null;
    CartTotalPrice: number | null;
    ProductsCount: number | null;
}