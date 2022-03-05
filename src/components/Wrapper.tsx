import React, { FC, ReactElement } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import { colors } from '../theme/base';
import { IWrapper } from './interfaces';

const StyledView = styled(View)<{ flex: number | undefined }>`
  ${({ flex }) => (flex ? `flex: ${flex}` : null)}
  align-items: center;
`;

const StyledLine = styled(View)`
  border-top-color: ${colors.grayVeryLight};
  border-top-width: 1px;
  align-self: stretch;
`;

const Wrapper: FC<IWrapper> = ({ children, border, flex }): ReactElement => (
  <>
    {border && <StyledLine />}
    <StyledView flex={flex}>{children}</StyledView>
  </>
);

export default Wrapper;
