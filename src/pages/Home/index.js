import React, { Component } from 'react';
import { FlatList } from 'react-native';
import api from '../../services/api';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          data={products}
          keyExtractor={prod => String(prod.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
            </Product>
          )}
        />
      </Container>
    );
  }
}
