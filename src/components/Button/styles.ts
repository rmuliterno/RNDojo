import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 18px;

  background-color: #3ad2ec;
  border-radius: 6px;
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #eee;
`;
