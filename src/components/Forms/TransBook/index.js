import { useRoute } from "@react-navigation/core";
import { Datepicker, Input, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import FormItem from "components/FormItem";
import Space from "components/Space";
import React, { useEffect } from "react";
import { View } from "react-native";
import { getFormatNumber } from "utils";
import SelectIcon from "./SelectIcon";

export default ({
  form,
  onSelectIcon
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
        />
      </FormItem>
      <FormItem
        form={form}
        name="name"
        rules={[
          {
            required: true,
            message: "Bạn hãy nhập tên sổ!"
          }
        ]}
      >
        <Input
          placeholder={"Tên sổ"}
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