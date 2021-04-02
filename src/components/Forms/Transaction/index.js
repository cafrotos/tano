import { Datepicker, Input, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import FormItem from "components/FormItem";
import Space from "components/Space";
import React from "react";
import { View } from "react-native";
import { getFormatNumber } from "utils";
import InputMoney from "./InputMoney";
import SelectGroup from "./SelectGroup";
import SelectTransBook from "./SelectTransBook";

export default ({
  form,
  onPressInputMoney,
  onPressSelectGroup
}) => {
  const handleFormat = (value) => {
    if (!value.includes("₫")) {
      value = value.slice(0, -2)
    }
    return getFormatNumber("vi-VN", value.replace(/\D/g, ""))
  }

  return (
    <Space
      direction="vertical"
    >
      {/**
       * @fixme move rule to configs
       */}
      <FormItem
        form={form}
        name="transBook"
        rules={[
          {
            required: true,
            message: "Hãy chọn sổ giao dịch nào!"
          }
        ]}
      >
        <SelectTransBook
        />
      </FormItem>
      <FormItem
        form={form}
        rules={[
          {
            required: true,
            message: "Hãy nhập số tiền đã giao dịch nào!"
          }
        ]}
        name="money"
        label={(
          <View
            style={[
              commonStyles.flexHorizontalMiddle,
              commonStyles.flexHorizontalCenter
            ]}
          >
            <Text>{"Nhập số tiền"}</Text>
          </View>
        )}
      >
        <InputMoney
          onPress={onPressInputMoney}
        />
      </FormItem>
      {/**
       * @fixme move rule to configs
       */}
      <FormItem
        form={form}
        name="group"
        rules={[
          {
            required: true,
            message: "Hãy chọn nhóm đã giao dịch nào!"
          }
        ]}
      >
        <SelectGroup
          onPress={onPressSelectGroup}
        />
      </FormItem>
      <FormItem
        form={form}
        name="content"
        rules={[
          {
            required: true,
            message: "Bạn chắc chắn sẽ muốn xem lại mình đã tiêu những gì đó!"
          }
        ]}
      >
        <Input
          placeholder="Nội dung"
          multiline
          textStyle={{ minHeight: 64 }}
        />
      </FormItem>
      <FormItem
        form={form}
        name="date"
      >
        <Datepicker
          date={new Date()}
          accessoryRight={renderIcon({ name: "calendar" })}
        />
      </FormItem>
    </Space>
  )
}