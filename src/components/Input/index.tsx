import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}
const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <S.Container>
    <S.Icon name={icon} size={20} color="#666360" />
    <S.TextInput placeholderTextColor="#666360" {...rest} />
  </S.Container>
);
export default Input;
