/// <reference types="react" />
import { Image } from '../common/interfaces/image';
export interface Product {
    title: string;
    price: string;
    image: Image;
}
export interface ProductCardProps {
    product: Product;
    onClick: Function;
}
export default function ProductCard(props: ProductCardProps): JSX.Element;
