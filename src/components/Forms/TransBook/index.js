import { useRoute } from "@react-navigation/core";
import { Input, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import FormItem from "components/FormItem";
import Space from "components/Space";
import React, { useEffect } from "react";
import { View } from "react-native";
import SelectIcon from "./SelectIcon";

export default ({
  form,
  onSelectIcon,
}) => {
  const { params } = useRoute()

  useEffect(() => {
    if (params?.icon) {
      form.setFiedlsValue({
        icon: params.icon
      })
    }
  }, [params])

  return (
    <Space
      direction="vertical"
    >
      {/**
       * @fixme move rule to configs
       */}
      <FormItem
        form={form}
        name="icon"
        label={(
          <View
            style={[
              commonStyles.flexHorizontalMiddle,
              commonStyles.flexHorizontalCenter
            ]}
          >
            <Text>{"Chọn biểu tượng"}</Text>
          </View>
        )}
      >
        {/**
         * @fixme đổi lại khi hoàn thành InputMoney
         */}
        {/* <InputMoney
          onPress={onPressInputMoney}
        /> */}
        <SelectIcon
          onSelectIcon={onSelectIcon}
          defaultValue={{
            name: "credit-card"
          }}
          
        />
      </FormItem>
      <FormItem
        form={form}
        name="name"
        label={"Tên sổ GD"}
        rules={[
          {
            required: true,
            message: "Bạn hãy nhập tên sổ!"
          }
        ]}
      >
        <Input
          placeholder={"Tên sổ GD"}
        />
      </FormItem>
      {/* <FormItem
        form={form}
        name="amount"
        label={"Số tiền ban đầu"}
      >
        <Input
          defaultValue={"0"}
          placeholder={"Số tiền ban đầu"}
          onFormat={handleFormat}
        />
      </FormItem> */}
      <FormItem
        form={form}
        name="description"
        label={"Mô tả"}
      >
        <Input
          multiline
          placeholder={"Mô tả"}
          textStyle={{ minHeight: 64 }}
        />
      </FormItem>
    </Space>
  )
}