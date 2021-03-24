import { Input, Text } from "@ui-kitten/components";
import FormItem from "components/FormItem";
import Space from "components/Space";
import React from "react";

export default ({
  form
}) => {
  return (
    <Space
      direction="vertical"
      size={10}
    >
      <FormItem
        form={form}
        name="money"
        label={"Số tiền"}
      >
        <Input
        size="large"
          textAlign="right"
        />
      </FormItem>
    </Space>
  )
}