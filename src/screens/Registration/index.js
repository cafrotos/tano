import { Layout, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Space from "components/Space";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles"

export default () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Layout
        level="1"
        style={[
          commonStyles.mainWrapper
        ]}
      >
        <Space direction="vertical">
          <Text style={styles.title}>
            {"Cô/chú vui lòng điền thông tin cá nhân"}
          </Text>
        </Space>
      </Layout>
    </SafeAreaView>
  )
}