import { Button, Layout, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import Space from "components/Space";
import { CONTEXTS } from "configs";
import React, { useContext } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getContext } from "utils";
import Menu from "./Menu";
import QuickReport from "./QuickReport";
import styles from "./styles"
import WellCome from "./WellCome";

const MainContext = getContext(CONTEXTS.MAIN)

export default () => {
  const { user } = useContext(MainContext)
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Layout
        level="1"
        style={[
          commonStyles.mainWrapper,
          styles.mainWrapper,
        ]}
      >
        <Space
          direction="vertical"
          size={8}
        >
          <WellCome />
          <QuickReport />
          <Menu />
        </Space>
      </Layout>
    </SafeAreaView>
  )
}