import { Text } from "@ui-kitten/components";
import React from "react";
import { formatNumber } from "utils";
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
    {formatNumber(Math.abs(amount))}
  </Text>
)