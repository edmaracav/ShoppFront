import Skus from './Sku'

export default interface Product {
    id: string | null;
    name: string | null;
    image: string;
    skus: Skus[];
}