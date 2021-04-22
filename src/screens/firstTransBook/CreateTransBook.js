import { useNavigation } from "@react-navigation/core";
import { Layout, Text } from "@ui-kitten/components";
import BlankHeader from "components/BlankHeader";
import TransBook from "components/Forms/TransBook";
import Space from "components/Space";
import { TanoButtonSubmit } from "components/TanoButton";
import { NAMES } from "configs/screens";
import React from "react";
import transBooksCollection from "repositories/transBooks";
import useForm from "services/hooks/useForm";

const FirstTransBook = () => {
  const navigaton = useNavigation();
  const form = useForm();

  const handleSubmit = async (formData) => {
    try {
      await transBooksCollection().add({
        ...formData,
        amount: 0
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout
      level="1"
      style={{
        height: "100%",
        padding: 16
      }}
    >
      <Space direction="vertical" style={{ marginBottom: 24 }}>
        <Text style={{ fontWeight: "600", fontSize: 24, textAlign: "center" }}>
          {"Tạo Sổ giao dịch đầu tiên"}
        </Text>
        <Text style={{ textAlign: "center" }}>
          {"Tano sẽ giúp bạn quản lý các nguồn tiền dựa trên đơn vị 'Sổ giao dịch'. Mỗi sổ tương ứng với 1 nguồn tiền của bạn như Ví tiền, Tài khoản ngân hàng, v.v"}
        </Text>
      </Space>
      <TransBook
        form={form}
        isShowRules={true}
        onSelectIcon={() => navigaton.navigate(NAMES.ICON, {
          screen: NAMES.ICON,
          params: {
            from: NAMES.FIRST_TRANSBOOK
          }
        })}
      />
      <TanoButtonSubmit
        onPress={form.submit(handleSubmit)}
      />
    </Layout>
  )
}

export default {
  name: NAMES.FIRST_TRANSBOOK,
  component: FirstTransBook,
  options: {
    header: BlankHeader,
  }
}