import { useEffect, useState } from "react";
import AsyncValidator from 'async-validator'
import _ from "lodash";

/**
 * @callback dataCallback
 * @param {Object} data
 */

const useForm = (() => {
  const rules = {}
  const setRules = (_rules) => {
    Object.assign(rules, _rules)
  }
  return () => {
    const [data, setData] = useState({});
    // const [rules, setRules] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      return () => {
        const keys = Object.keys(rules);
        keys.map(key => {
          delete rules[key]
          return key
        })
      }
    }, [])

    /**
     * 
     * @param {(dataCallback|Object)} _data 
     */
    const setFiedlsValue = (_data) => {
      setErrors(_errors => ({
        ..._errors,
        ...Object.assign({}, ...Object.keys(_data).map(key => ({ [key]: undefined })))
      }))
      switch (typeof _data) {
        case "object":
          setData({
            ...data,
            ..._data
          })
          break;
        case "function":
          setData({
            ...data,
            ..._data(data)
          })
        default:
          break;
      }
    }

    /**
     * 
     * @param {Object.<string, import("async-validator").Rules>} _rules
     */
    const addrules = (_rules) => {
      setRules({
        ...rules,
        ..._rules
      })
    }

    /**
     * 
     * @param {Array>} fields 
     */
    const validateFields = async (fields) => {
      if (!Array.isArray(fields) || (Array.isArray(fields) && !fields.length)) {
        fields = Object.keys(rules)
      }

      const subData = _.pick(data, fields);
      const subRules = _.pick(rules, fields);

      if (!Object.keys(subRules).length) {
        return true
      }

      const validator = new AsyncValidator(subRules)

      try {
        await validator.validate(subData)
        return true
      } catch (reasons) {
        if (reasons.errors) {
          const newErrors = Object.assign({}, ...reasons.errors.map(error => ({ [error.field]: error.message })))
          setErrors(_errors => ({
            ..._errors,
            ...newErrors
          }))
        }
        return false
      }
    }

    const submit = (_handleSubmit) => async () => {
      const isValidate = await validateFields()
      if (!isValidate) {
        return
      }
      return await _handleSubmit(_.pickBy(data, _.identity))
    }

    return {
      data,
      loading,
      errors,
      setFiedlsValue,
      addrules,
      validateFields,
      submit
    }
  }
})()

export default useForm