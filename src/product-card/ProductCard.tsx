import * as React from 'react';
import { Card } from '../card';
import { ProgressiveImage } from '../progressive-image';
import './product-card.css';
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

export default function ProductCard(props: ProductCardProps) {
  const { product, onClick } = props;
  return (
    <Card>
      <div style={{ height: 320, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          {/* <ShareButton
              width={38}
              selected={product.title}
              shopId={product.shop_id}
              productId={product.id}
              className="product-share-btn"
            />
            <FavoriteButton
              uid={uid}§
              type="products"
              product={product}
            /> */}
        </div>
        <div className="product-card__body" onClick={() => onClick()}>
          <ProgressiveImage
            image={
              product.image
                ? product.image
                : {
                    src: '',
                    preview: '',
                  }
            }
            alt={product.title}
            width={400}
            height={200}
          />
          <div>
            {product.title && product.title.length > 35 ? (
              <h4 className="product-card__title">
                {product.title.slice(0, 35).concat('...')}
              </h4>
            ) : (
              <h4 className="product-card__title">{product.title}</h4>
            )}
            <p className="product-card__price">{product.price}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
