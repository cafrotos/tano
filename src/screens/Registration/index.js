import { Layout, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import UserProfile from "components/Forms/UserProfile";
import Space from "components/Space";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useForm from "services/hooks/useForm";

import styles from "./styles"

export default () => {
  const form = useForm()

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
          <UserProfile
            form={form}
          />
        </Space>
      </Layout>
    </SafeAreaView>
  )
}