import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { textInputProps } from "@/src/types/customInputTypes";

const CustomTextInput = (props: textInputProps) => {
  const {
    rightIcon,
    rightIconSize = 20,
    onRightIconPress,
    containerStyle,
    inputStyle,
    ...inputProps
  } = props;
  return (
    <View
      className={`flex-row items-center border-[0.5px] shadow-md bg-white rounded-md p-2 max-h-[17%] justify-between ${containerStyle}`}
    >
      <TextInput
        className={`min-w-[80%] ${
          !rightIcon ? "max-w-[100%]" : "max-w-[80%]"
        } min-h-[10%] py-3 ${inputStyle}`}
        placeholderTextColor={"black"}
        {...inputProps}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
