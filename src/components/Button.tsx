import React, { FC, ReactElement } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { colors } from '../theme/base';
import { IButton } from './interfaces';

const StyledButton = styled(TouchableOpacity)<{ filled: boolean }>`
  margin: 10px 0;
  padding: 14px 20px;
  border-radius: 4px;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => (props.filled ? colors.grayVeryLight : colors.infoDark)};
  border: ${(props) => (props.filled ? '1px solid #ced4da' : '1px solid #003B72')};
`;

const StyledButtonText = styled(Text)<{ filled: boolean }>`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  width: 150px;
  text-align: center;
  color: ${(props) => (props.filled ? colors.grayLight : colors.white)};
`;

const Button: FC<IButton> = ({ filled = true, text, onPress, loading }): ReactElement => (
  <StyledButton filled={filled} disabled={filled} onPress={() => onPress()}>
    {loading ? (
      <StyledButtonText filled={filled}>{text}</StyledButtonText>
    ) : (
      <ActivityIndicator style={{ width: 300 }} size="small" color={colors.grayLight} />
    )}
  </StyledButton>
);

export default Button;
