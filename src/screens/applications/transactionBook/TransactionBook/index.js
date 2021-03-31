import { Layout } from "@ui-kitten/components";
import React from "react";
import TotalAmount from "./TotalAmount";

import { _mockDetailReport } from "configs/mockups"

export default () => {
  return (
    <Layout
      level="1"
      style={{
        height: "100%"
      }}
    >
      <TotalAmount
        total={_mockDetailReport.total}
      />
    </Layout>
  )
}