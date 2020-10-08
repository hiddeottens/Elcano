import * as React from 'react';
import { Card } from '../card';
import { ProgressiveImage } from '../progressive-image';
import { Image } from '../common/interfaces/image';
import { Wrapper, Footer, Body, Title, Price } from './ProductCardStyles';

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
      <Wrapper onClick={() => onClick()}>
        {/* <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <ShareButton
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
            />
        </div> */}
        <Body>
          <div>
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
              width={200}
            />
          </div>
        </Body>
        <Footer>
          {product.title && product.title.length > 35 ? (
            <Title>{product.title.slice(0, 35).concat('...')}</Title>
          ) : (
            <Title>{product.title}</Title>
          )}
          <Price>{product.price}</Price>
        </Footer>
      </Wrapper>
    </Card>
  );
}
