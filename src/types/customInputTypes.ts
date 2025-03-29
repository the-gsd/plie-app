import { ReactComponentElement, ReactNode } from "react";
import { TextInputProps } from "react-native";

export interface textInputProps extends TextInputProps {
  inputStyle?: string;
  rightIcon?: ReactNode;
  rightIconSize?: number;
  onRightIconPress?: () => void;
  containerStyle?: string;
}
