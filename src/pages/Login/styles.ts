import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const Header = styled.View`
  background-color: #3ad2ec;
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Form = styled.View`
  width: 100%;
  flex: 1;
  padding: 24px;
`;
