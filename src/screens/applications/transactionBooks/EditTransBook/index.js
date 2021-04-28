import { useNavigation, useRoute } from "@react-navigation/core";
import { Layout, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import TransBook from "components/Forms/TransBook";
import { NAMES } from "configs/screens";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import useForm from "services/hooks/useForm";
import transBooksCollection from "repositories/transBooks"
import TanoButton, { TanoButtonSubmit } from "components/TanoButton";
import Space from "components/Space";
import TanoLayout from "components/TanoLayout";

const EditTransBook = () => {
  const { params } = useRoute()
  const navigation = useNavigation();
  const form = useForm()

  useEffect(() => {
    if (params?.transBook) {
      form.setFiedlsValue(params.transBook)
    }
  }, [])

  const handleSelectIcon = () => navigation.navigate(NAMES.ICON, {
    screen: NAMES.ICON,
    params: {
      from: {
        screen: NAMES.TRANSACTION_BOOK,
        params: {
          screen: NAMES.EDIT_TRANS_BOOK
        }
      }
    }
  })

  const handleSubmit = async (formData) => {
    try {
      await transBooksCollection()
        .doc(params?.transBook?.id)
        .update(formData)
      navigation.goBack()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TanoLayout>
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
      <TanoButtonSubmit
        onPress={form.submit(handleSubmit)}
      />
    </TanoLayout>
  )
}

export default {
  name: NAMES.EDIT_TRANS_BOOK,
  component: EditTransBook,
  options: ({ route }) => ({
    headerTitle: (
      <Space
        direction="vertical"
        size={0.25}
        style={[
          commonStyles.flexVerticalCenter,
          commonStyles.flexVerticalMiddle,
        ]}
      >
        <Text category="s1">
          {route.name}
        </Text>
        <Text category="c2">
          {route.params?.transBook?.name}
        </Text>
      </Space>
    )
  })
}