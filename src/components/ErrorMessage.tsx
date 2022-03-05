import React, { FC, ReactElement } from 'react';
import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components';

import { colors, textColors } from '../theme/base';
import { IErrorMessage } from './interfaces';

const StyledView = styled(View)`
  border-radius: 4px;
  background-color: ${colors.errorContainer};
  border-left-color: ${colors.errorLeftBorder};
  border-left-width: 2px;
  margin: 10px;
  padding: 10px;
  width: 340px;
`;

const StyledText = styled(Text)`
  font-size: 17px;
  color: ${textColors.primary};
`;

// eslint-disable-next-line no-undef
const StyledButtonText = styled(Text)<{ filled: boolean | undefined }>`
  font-size: 17px;
  color: ${(props) => (props.filled ? textColors.disabled : textColors.primary)};
  text-decoration-line: underline;
`;

const ErrorMessage: FC<IErrorMessage> = ({
  message,
  disableLinked,
  errorMessageLinked,
  onPressErrorLinked,
}): ReactElement => (
  <StyledView>
    <StyledText>{message}</StyledText>
    {errorMessageLinked && (
      <Pressable disabled={disableLinked} onPress={onPressErrorLinked}>
        <StyledButtonText filled={disableLinked}>{errorMessageLinked}</StyledButtonText>
      </Pressable>
    )}
  </StyledView>
);

export default ErrorMessage;
