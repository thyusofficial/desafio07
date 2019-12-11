import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  EmptyContainer,
  EmptyText,
  Products,
  Product,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
} from './styles';

function Cart({ cart }) {
  return (
    <Container>
      {cart.length ? (
        <Products>
          {cart.map(product => (
            <Product key={product.id}>
              <ProductImage source={{ uri: product.image }} />
              <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductDetails>
            </Product>
          ))}
        </Products>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
