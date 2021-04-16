import { Text } from "@ui-kitten/components";
import Barchart from "components/Barchart";
import React, { useMemo } from "react";

export default ({
  transactions
}) => {
  const barchartProps = useMemo(() => ({
    negative: transactions.map(trans => trans.negative),
    positive: transactions.map(trans => trans.positive),
    labels: transactions.map(trans => trans.label),
  }), [transactions])
  return (
    <>
      <Text category="s1" style={{ fontSize: 20, marginLeft: 24, paddingVertical: 16 }}>
        {"Khoản thu & Khoản chi"}
      </Text>
      <Barchart
        {...barchartProps}
      />
    </>
  )
}