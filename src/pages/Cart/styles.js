import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const Products = styled.View``;

export const Product = styled.View`
  flex-direction: row;
`;

export const ProductDetails = styled.View`
  justify-content: space-around;
  flex: 1;
  margin-left: 10px;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  color: #333333;
  line-height: 18px;
`;
export const ProductPrice = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  align-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 50px 0;
`;
