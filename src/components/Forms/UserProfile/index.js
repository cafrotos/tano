import { Input } from "@ui-kitten/components";
import FormItem from "components/FormItem";
import Space from "components/Space";
import React from "react";

export default ({
  form
}) => {
  <Space direction="vertical">
    <FormItem
      form={form}
      name="fullname"
      label={"Họ và tên"}
      rules={[
        {
          required: true,
          message: "Cô/chú vui lòng điền tên!"
        }
      ]}
    >
      <Input />
    </FormItem>
    <FormItem
      form={form}
      name="gender"
      label={"Giới tính"}
      rules={[
        {
          required: true,
          message: "Cô/chú vui lòng điền tên!"
        }
      ]}
    >
      <Input />
    </FormItem>
  </Space>
}