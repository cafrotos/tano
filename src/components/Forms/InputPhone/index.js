import { Input, Text } from "@ui-kitten/components";
import FormItem from "components/FormItem";
import Space from "components/Space";
import { inputPhone } from "configs/formRules";
import React from "react";
import styles from "./styles";

export default ({
  form
}) => {
  return (
    <Space
      size={10}
      direction="vertical"
    >
      <FormItem
        form={form}
        spaceSize={10}
        rules={inputPhone}
        name="phone"
        label={(
          <Text style={styles.hint}>
            {"Vui lòng nhập số điện thoại để tiếp tục"}
          </Text>
        )}
      >
        <Input
          autoFocus
          style={styles.input}
          keyboardType="number-pad"
          placeholder={"Số điện thoại của cô chú"}
        />
      </FormItem>
    </Space>
  )
}