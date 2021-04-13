import { useRoute } from "@react-navigation/core";
import { Datepicker, Input, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import FormItem from "components/FormItem";
import Space from "components/Space";
import React, { useEffect } from "react";
import { View } from "react-native";
import { getFormatNumber } from "utils";
import InputMoney from "./InputMoney";
import SelectGroup from "./SelectGroup";
import SelectTransBook from "./SelectTransBook";

export default ({
  form,
  onPressInputMoney,
  onPressSelectGroup,
  onPressSelectTransBook,
}) => {
  const { params } = useRoute()

  useEffect(() => {
    if (params) {
      const fieldsValue = {}
      if (params?.transGroup) {
        Object.assign(fieldsValue, {
          transGroup: params.transGroup.id
        })
      }
      if (params?.transBook) {
        Object.assign(fieldsValue, {
          transBook: params.transBook.id
        })
      }
      form.setFiedlsValue(fieldsValue)
    }
  }, [params])

  const handleFormat = (value) => {
    if (value && !value.includes("₫")) {
      value = value.slice(0, -2)
    }
    return getFormatNumber("vi-VN", value?.replace(/\D/g, "") || 0)
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
        {/**
         * @fixme đổi lại khi hoàn thành InputMoney
         */}
        {/* <InputMoney
          onPress={onPressInputMoney}
        /> */}
        <Input
          onFormat={handleFormat}
          textAlign="center"
          textStyle={{
            fontSize: 40,
            padding: 16
          }}
          selectionTail={2}
        />
      </FormItem>
      {/**
       * @fixme move rule to configs
       */}
      <FormItem
        form={form}
        name="transGroup"
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
        name="transBook"
        rules={[
          {
            required: true,
            message: "Hãy chọn sổ giao dịch nào!"
          }
        ]}
      >
        <SelectTransBook
          onPress={onPressSelectTransBook}
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