import { ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';

export interface IButton {
  filled?: boolean;
  icon?: ImageSourcePropType;
  text?: string;
  onPress: () => void;
  loading?: boolean;
}

export interface IErrorMessage {
  message: string;
  disableLinked?: boolean;
  errorMessageLinked?: string | null;
  onPressErrorLinked?: () => void;
}

export interface IParagraph {
  disabled?: boolean;
  bold?: boolean;
  children: string | ReactNode;
}

export interface ITextInput {
  value?: string;
  defaultValue?: string;
  maxLength?: number;
  label: string;
  onChangeText?: (event: string) => void;
  required?: boolean;
  onFocus?: () => void;
  icon?: any;
  secureTextEntry?: boolean;
}

export interface ITitle {
  text: string;
  bold?: boolean;
}

export interface IWrapper {
  position?: 'top' | 'bottom' | 'centered';
  flex?: number;
  border?: boolean;
  children: ReactNode;
}
