import React, { FC, ReactElement } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import { textColors } from '../theme/base';
import { IParagraph } from './interfaces';

const StyledParagraph = styled(Text)<{ disabled: boolean | undefined; bold: boolean | undefined }>`
  color: ${(props) => (props.disabled ? textColors.disabled : textColors.primary)};
  font-size: 17px;
  text-align: center;
  margin-horizontal: 60px;
  ${(props) => (props.bold ? 'font-weight: bold;' : null)}
`;

const Paragraph: FC<IParagraph> = ({ disabled, bold, children }): ReactElement => (
  <StyledParagraph disabled={disabled} bold={bold}>
    {children}
  </StyledParagraph>
);

export default Paragraph;
