import React, { FC, ReactElement } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import { colors } from '../theme/base';
import { ITitle } from './interfaces';

const StyledTitle = styled(Text)<{ bold: boolean | undefined }>`
  color: ${colors.black};
  font-size: 24px;
  line-height: 33px;
  padding: 15px;
`;

const Title: FC<ITitle> = ({ text, bold = true }): ReactElement => (
  <StyledTitle bold={bold}>{text}</StyledTitle>
);

export default Title;
