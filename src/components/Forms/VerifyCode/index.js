import { Text } from "@ui-kitten/components";
import FormItem from "components/FormItem";
import InputVerifyCode from "components/InputVerifyCode";
import { inputCode } from "configs/formRules";
import React from "react";
import styles from "./styles"

export default ({
  form
}) => {
  return (
    <FormItem
      form={form}
      name="code"
      label={(
        <Text style={styles.label}>
          {"Cô chú vui lòng nhập Mã Xác Nhận Tano đã gửi vào tin nhắn để tiếp tục"}
        </Text>
      )}
      rules={inputCode}
      style={styles.formWrapper}
    >
      <InputVerifyCode
        codeLength={6}
      />
    </FormItem>
  )
}