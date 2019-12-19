import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import produce from 'immer';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

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

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

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
                  <ProductPrice>{product.priceFormatted}</ProductPrice>
                </ProductDetails>
                <ProductDelete onPress={() => removeFromCart(product.id)}>
                  <Icon name="delete-forever" size={24} color="#7159c1" />
                </ProductDelete>
              </ProductBody>
              <ProductFooter>
                <ProductControlButton onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    color="#7159c1"
                    size={22}
                  />
                </ProductControlButton>
                <ProductAmount>{product.amount || 0}</ProductAmount>
                <ProductControlButton onPress={() => increment(product)}>
                  <Icon name="add-circle-outline" color="#7159c1" size={22} />
                </ProductControlButton>
                <ProductSubtotal>{product.subtotal}</ProductSubtotal>
              </ProductFooter>
            </Product>
          ))}
          <Total>
            <TotalText>Total</TotalText>
            <TotalAmount>{total}</TotalAmount>
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
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
