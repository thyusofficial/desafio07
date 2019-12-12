import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 5px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const Products = styled.View``;

export const Product = styled.View``;

export const ProductBody = styled.View`
  flex-direction: row;
  /* border: 1px solid #eee;
  border-radius: 4px; */
  padding: 10px;
`;

export const ProductDetails = styled.View`
  justify-content: space-around;
  flex: 1;
  margin-left: 12px;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  line-height: 19px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ProductDelete = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ProductFooter = styled.View`
  flex-direction: row;
  background: #eee;
  padding: 15px;
  align-items: center;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.Text`
  margin: 0 10px;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
`;

export const ProductSubtotal = styled.Text`
  text-align: right;
  flex: 1;
  font-weight: bold;
`;

export const Total = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: #999999;
`;
export const TotalAmount = styled.Text`
  margin: 10px 0;
  font-size: 32px;
  font-weight: bold;
`;

export const Order = styled.TouchableOpacity`
  background: #7159c1;
  width: 100%;
  border-radius: 4px;
`;

export const OrderText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  padding: 12px;
  text-align: center;
  color: #fff;
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
