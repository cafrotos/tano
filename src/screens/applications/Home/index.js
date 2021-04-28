import { Layout } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Space from "components/Space";
import TanoLayout from "components/TanoLayout";
import { CONTEXTS } from "configs";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getContext } from "utils";
import Menu from "./Menu";
import QuickReport from "./QuickReport";
import styles from "./styles"
import WellCome from "./WellCome";

const MainContext = getContext(CONTEXTS.MAIN)

export default () => {
  return (
    <TanoLayout
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
    </TanoLayout>
  )
}