import React, { FC, ReactElement } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import { IWrapper } from './interfaces';

const StyledView = styled(View)`
  align-items: center;
  background-color: white;
  justify-content: flex-start;
  flex: 1;
`;

const ScreenLayout: FC<IWrapper> = ({ children }): ReactElement => (
  <StyledView>{children}</StyledView>
);

export default ScreenLayout;
