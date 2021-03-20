import { Datepicker, Input, Select, SelectItem } from "@ui-kitten/components";
import FormItem from "components/FormItem";
import Space from "components/Space";
import React from "react";

export default ({
  form
}) => {
  return (
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
        <Input
          autoFocus
        />
      </FormItem>
      <FormItem
        form={form}
        name="gender"
        label={"Giới tính"}
        rules={[
          {
            required: true,
            message: "Cô/chú vui lòng chọn giới tính!"
          }
        ]}
      >
        <Select placeholder={"Giới tính"}>
          <SelectItem title={"Nam"} />
          <SelectItem title={"Nữ"} />
        </Select>
      </FormItem>
      <FormItem
        form={form}
        name="birthday"
        label={"Ngày sinh"}
        rules={[
          {
            required: true,
            message: "Cô/chú vui lòng chọn ngày sinh!"
          }
        ]}
      >
        <Datepicker placeholder={"Ngày sinh"} />
      </FormItem>
    </Space>
  )
}