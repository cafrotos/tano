import { Layout, Text } from "@ui-kitten/components";
import React from "react";

import useCalc from "services/hooks/useCalc";
import Numpad from "./Numpad";

export default () => {
  const { string, handlePressPad } = useCalc();

  return (
    <Layout
      level="1"
      style={{
        height: "100%",
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
    </Layout>
  )
}