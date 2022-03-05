import React, { FC, ReactElement } from 'react';
import { Image, Text, TextInput as Input, View } from 'react-native';
import styled from 'styled-components';

import { colors, textColors } from '../theme/base';
import { ITextInput } from './interfaces';

const StyledLabelText = styled(Text)`
  font-size: 12px;
  line-height: 22px;
  color: ${textColors.primary};
`;

const StyledViewContainer = styled(View)`
  align-content: flex-start;
  justify-content: center;
`;

const StyledLabelContainer = styled(View)`
  align-items: center;
  padding-top: 10px;
  flex-direction: row;
`;

const StyledTextInput = styled(Input)`
  color: ${textColors.primary};
  font-size: 14px;
  width: 340px;
  margin-top: 10px;
  padding: 12px 15px;
  border-radius: 4px;
  border: 1px solid ${colors.grayLight};
  margin-bottom: 10px;
`;

const StyledIconInputWrapper = styled(View)`
  align-items: flex-start;
  justify-content: center;
`;

const TextInput: FC<ITextInput> = ({
  value,
  defaultValue,
  maxLength,
  label,
  onChangeText,
  required,
  onFocus,
  icon,
  secureTextEntry,
}): ReactElement => (
  <StyledViewContainer>
    <StyledLabelContainer>
      <StyledLabelText>{label}</StyledLabelText>
    </StyledLabelContainer>
    <StyledIconInputWrapper>
      <StyledTextInput
        value={value}
        maxLength={maxLength}
        placeholder={defaultValue}
        onChangeText={onChangeText}
        onFocus={onFocus}
        secureTextEntry={secureTextEntry}
      />
    </StyledIconInputWrapper>
  </StyledViewContainer>
);

export default TextInput;
