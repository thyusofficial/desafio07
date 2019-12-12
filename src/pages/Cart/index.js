import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  EmptyContainer,
  EmptyText,
  Products,
  Product,
  ProductBody,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductFooter,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  Total,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
} from './styles';

function Cart({ cart }) {
  return (
    <Container>
      {cart.length ? (
        <Products>
          {cart.map(product => (
            <Product key={product.id}>
              <ProductBody>
                <ProductImage source={{ uri: product.image }} />
                <ProductDetails>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.price}</ProductPrice>
                </ProductDetails>
                <ProductDelete>
                  <Icon name="delete-forever" size={24} color="#7159c1" />
                </ProductDelete>
              </ProductBody>
              <ProductFooter>
                <ProductControlButton>
                  <Icon
                    name="remove-circle-outline"
                    color="#7159c1"
                    size={22}
                  />
                </ProductControlButton>
                <ProductAmount>10</ProductAmount>
                <ProductControlButton>
                  <Icon name="add-circle-outline" color="#7159c1" size={22} />
                </ProductControlButton>
                <ProductSubtotal>123</ProductSubtotal>
              </ProductFooter>
            </Product>
          ))}
          <Total>
            <TotalText>Total</TotalText>
            <TotalAmount>1234</TotalAmount>
            <Order>
              <OrderText>Finalizar Pedido</OrderText>
            </Order>
          </Total>
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
