import { Layout } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import Numpad from "./Numpad";

export default () => {
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

      </Layout>
      <Layout
        level="1"
        style={{
          flex: 4
        }}
      >
        <Numpad />
      </Layout>
    </Layout>
  )
}