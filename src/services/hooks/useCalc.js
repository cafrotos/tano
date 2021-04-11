import { useState } from "react"

const REG_OPERATOR = /(\÷)|(\+)|(\-)|(x)/g

export default () => {
  const [string, setString] = useState("0");

  const handlePressPad = (value) => {
    switch (true) {
      case REG_OPERATOR.test(value):
        setString(string + ` ${value} `)
        break;
      default:
        setString(string + value)
    }
  }

  return {
    string,
    handlePressPad
  }
}