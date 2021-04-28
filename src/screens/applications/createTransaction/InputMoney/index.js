import { Layout, Text } from "@ui-kitten/components";
import TanoLayout from "components/TanoLayout";
import React from "react";

import useCalc from "services/hooks/useCalc";
import Numpad from "./Numpad";

export default () => {
  const { string, handlePressPad } = useCalc();

  return (
    <TanoLayout
      style={{
        justifyContent: "space-between"
      }}
    >
      <Layout
        style={{
          flex: 5
        }}
      >
        <Text>
          {string}
        </Text>
      </Layout>
      <Layout
        level="1"
        style={{
          flex: 4
        }}
      >
        <Numpad onPress={handlePressPad} />
      </Layout>
    </TanoLayout>
  )
}