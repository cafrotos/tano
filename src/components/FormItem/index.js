/**
 * @typedef FormInstance
 * @property {Object} data
 * @property {Object} errors
 * @property {Function} setFiedlsValue
 * @property {Function} addrules
 * @property {Function} validateFields
 * @property {Function} submit
 */
import React, { cloneElement, useMemo } from "react"
import { Text } from "@ui-kitten/components"
import Space from "components/Space"
import { useEffect } from "react"
import moment from "moment"
import { Keyboard } from "react-native"

/**
 * 
 * @param {Object} props
 * @param {FormInstance} props.form
 * @param {string} props.name
 * @param {(string | import("react").ReactElement)} props.label
 * @param {import("async-validator").Rules} props.rules
 * @param {import("react").ReactChildren} props.children
 * @param {string} props.valuePropsName
 * @param {Function} props.getValueFromEvent
 * @param {Number} props.spaceSize
 * @param {import("react-native").ViewStyle} props.style
 */
const FormItem = ({
  form,
  name,
  label,
  rules,
  children,
  valuePropsName,
  getValueFromEvent,
  spaceSize,
  style
}) => {
  if (!form) {
    throw new Error("Props `form` is required!")
  }

  useEffect(() => {
    form.addrules({
      [name]: rules
    })
  }, [])

  const childrenProps = useMemo(() => {
    if (children instanceof Array) {
      return {}
    }
    const props = {
      onBlur: () => form.validateFields([name])
    }
    switch (children?.type?.displayName) {
      case "Input":
        props.onChangeText = (value) => form.setFiedlsValue({ [name]: value })
        if (form.errors[name]) {
          props.status = "danger"
          props.caption = form.errors[name]
        }
        break;
      case "Select":
        props.onSelect = (select) => {
          form.setFiedlsValue({
            [name]: children.props.children.find((child, index) => index === select.row)?.props?.title,
          })
        }
        if (form.errors[name]) {
          props.status = "danger"
          props.caption = form.errors[name]
        }
      case "Datepicker":
        valuePropsName = "date"
        props.min = moment("01/01/1960", "DD/MM/YYYY").toDate()
        props.max = moment("01/01/2200", "DD/MM/YYYY").toDate()
        props.onSelect = (date) => {
          form.setFiedlsValue({
            [name]: date,
          })
        }
        props.onFocus = () => Keyboard.dismiss()
        if (form.errors[name]) {
          props.status = "danger"
          props.caption = form.errors[name]
        }
      default:
        break;
    }
    props[valuePropsName] = form.data[name]
    return props
  }, [getValueFromEvent, name, form.data[name], form.errors[name], children])

  return (
    <Space
      direction="vertical"
      size={spaceSize || 1}
      style={style}
    >
      {
        typeof label === "string" ? (
          <Text>
            {label}
          </Text>
        ) : (
          label
        )
      }
      {
        children instanceof Array ?
          children :
          cloneElement(children, childrenProps)
      }
    </Space>
  )
}

FormItem.defaultProps = {
  valuePropsName: "value",
}

export default FormItem