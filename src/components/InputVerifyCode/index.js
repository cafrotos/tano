import { Text } from "@ui-kitten/components";
import Space from "components/Space";
import React from "react";
import { View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from './styles';

const InputVerifyCode = ({
  value,
  onChangeText,
  codeLength,
  status,
  caption,
  onSubmit
}) => {
  const ref = useBlurOnFulfill({ value, cellCount: codeLength });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeText,
  });


  return (
    <Space direction="vertical" >
      <CodeField
        ref={ref}
        {...props}
        autoFocus
        value={value}
        onChangeText={onChangeText}
        keyboardType="number-pad"
        cellCount={codeLength}
        rootStyle={styles.rootStyle}
        onEndEditing={onSubmit}
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Space
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </Space>
        )}
      />
      {
        caption && (
          <Text style={status ? styles[status] : {}} category="c1">
            {caption}
          </Text>
        )
      }
    </Space>
  )
}

InputVerifyCode.displayName = "Input"

export default InputVerifyCode