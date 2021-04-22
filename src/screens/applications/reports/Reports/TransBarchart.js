import { Text } from "@ui-kitten/components";
import Barchart from "components/Charts/Barchart";
import _ from "lodash";
import React, { useMemo } from "react";

export default ({
  transactions
}) => {
  const barchartProps = useMemo(() => ({
    negative: transactions.map(trans => _.sumBy(trans.negative, (v) => Number(v.amount))),
    positive: transactions.map(trans => _.sumBy(trans.positive, (v) => Number(v.amount))),
    labels: transactions.map(trans => trans.label),
  }), [transactions])

  return (
    <>
      <Text category="s1" style={{ fontSize: 20, marginLeft: 24, paddingVertical: 16 }}>
        {"Biểu đồ thu chi"}
      </Text>
      <Barchart
        {...barchartProps}
      />
    </>
  )
}