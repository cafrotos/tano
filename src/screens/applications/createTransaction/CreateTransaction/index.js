import { useNavigation } from "@react-navigation/core";
import { Button, Layout } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Transaction from "components/Forms/Transaction";
import { NAMES } from "configs/screens";
import React from "react";
import { ScrollView, View } from "react-native";
import useForm from "services/hooks/useForm";
import styles from "./styles"

export default () => {
  const form = useForm();
  const navigation = useNavigation();

  const handleSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <Layout level="1"
      style={{
        height: "100%",
        position: "relative"
      }}
    >
      <ScrollView
        style={{
          padding: 4 * 4,
        }}
      >
        <Transaction
          form={form}
          onPressInputMoney={() => navigation.navigate(NAMES.INPUT_MONEY)}
          onPressSelectGroup={() => navigation.navigate(NAMES.SELECT_GROUP)}
        />
        <View
          style={{
            padding: 40
          }}
        />
      </ScrollView>
      <View
        style={[
          commonStyles.flexHorizontalCenter,
          commonStyles.flexHorizontalMiddle,
          styles.saveButtonWrapper
        ]}
      >
        <Button onPress={form.submit(handleSubmit)}>
          {"Lưu"}
        </Button>
      </View>
    </Layout>
  )
}