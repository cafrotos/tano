import { useNavigation } from "@react-navigation/core";
import { Layout } from "@ui-kitten/components";
import { buttonStyle, commonStyles } from "assets/styles";
import Transaction from "components/Forms/Transaction";
import TanoButton, { TanoButtonSubmit } from "components/TanoButton";
import { NAMES } from "configs/screens";
import React from "react";
import { ScrollView, View } from "react-native";
import { createTransaction } from "repositories/transactions";
import useForm from "services/hooks/useForm";
import styles from "./styles"

export default () => {
  const form = useForm();
  const navigation = useNavigation();

  const handleSubmit = async (formData) => {
    try {
      await createTransaction(formData)
      navigation.navigate(NAMES.TRANSACTION_BOOK, {
        screen: NAMES.DETAIL_TRANS_BOOK,
        params: {
          transBook: {
            id: formData.transBook
          }
        }
      })
    } catch (error) {
      console.log(error)
    }
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
          onPressSelectTransBook={() => navigation.navigate(NAMES.SELECT_TRANS_BOOK)}
        />
        <View
          style={{
            padding: 40
          }}
        />
      </ScrollView>
      <TanoButtonSubmit
        onPress={form.submit(handleSubmit)}
      />
    </Layout>
  )
}