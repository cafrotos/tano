import { Text } from "@ui-kitten/components";
import React from "react";
import { getFormatNumber } from "utils";
import styles from "./styles"

export default ({
  amount,
  style,
  ...props
}) => (
  <Text
    {...props}
    style={[
      amount > 0 ? styles.plus : styles.minus,
      style
    ]}
  >
    {getFormatNumber("vi-VN", Math.abs(amount))}
  </Text>
)