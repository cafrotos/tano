import { useNavigation } from "@react-navigation/core";
import { Button, Layout } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import TransBook from "components/Forms/TransBook";
import { NAMES } from "configs/screens";
import React from "react";
import { ScrollView, View, Alert } from "react-native";
import useForm from "services/hooks/useForm";
import transBooksCollection from "repositories/transBooks"
import TanoButton from "components/TanoButton";

const CreateTransBook = () => {
  const navigation = useNavigation();
  const form = useForm()

  const handleSelectIcon = () => navigation.navigate(NAMES.ICON, {
    screen: NAMES.ICON,
    params: {
      from: NAMES.CREATE_TRANS_BOOK
    }
  })

  const handleSubmit = async (formData) => {
    try {
      await transBooksCollection.add({
        ...formData,
        amount: 0
      })
      navigation.goBack()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout
      level="1"
      style={{
        height: "100%",
      }}
    >
      <ScrollView
        style={{
          padding: 4 * 4,
        }}
      >

        <TransBook
          form={form}
          onSelectIcon={handleSelectIcon}
        />
      </ScrollView>
      <View
        style={[
          commonStyles.flexHorizontalCenter,
          commonStyles.flexHorizontalMiddle,
          {
            position: "absolute",
            bottom: 4
          }
        ]}
      >
        <TanoButton
          onPress={form.submit(handleSubmit)}
        >
          {"Lưu"}
        </TanoButton>
      </View>
    </Layout>
  )
}

export default {
  name: NAMES.CREATE_TRANS_BOOK,
  component: CreateTransBook,
}