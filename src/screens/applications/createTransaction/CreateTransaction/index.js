import { Button, Layout } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Transaction from "components/Forms/Transaction";
import React from "react";
import { View } from "react-native";
import useForm from "services/hooks/useForm";
import styles from "./styles"

export default () => {
  const form = useForm();

  return (
    <Layout level="1" 
      style={{
        height: "100%",
        position: "relative",
        padding: 8
      }}
    >
      <Transaction 
        form={form}
      />
      <View
        style={[
          commonStyles.flexHorizontalCenter,
          commonStyles.flexHorizontalMiddle,
          styles.saveButtonWrapper,
        ]}
      >
        <Button>
          {"Lưu"}
        </Button>
      </View>
    </Layout>
  )
}