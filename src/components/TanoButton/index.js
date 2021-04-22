import { Button, Spinner } from "@ui-kitten/components";
import { buttonStyle, commonStyles } from "assets/styles";
import React, { useCallback, useState } from "react";
import { Dimensions, View } from "react-native";
import { setAsyncTimeout } from "utils";

/**
 * 
 * @param {import("@ui-kitten/components").ButtonProps} props
 */
const TanoButton = ({
  children,
  ...props
}) => {
  const [loading, setLoading] = useState(false)

  const handlePress = async (event) => {
    if (loading) {
      return
    }
    setLoading(true)
    try {
      typeof props.onPress === "function" && await setAsyncTimeout(props.onPress(event))
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const accessoryLeft = useCallback(() => <Spinner size="small" status="info" />, [])

  return (
    <Button
      {...props}
      onPress={handlePress}
      accessoryLeft={loading ? accessoryLeft : props.accessoryLeft}
      style={[
        buttonStyle.shadowBorder,
        props.style
      ]}
    >
      {children}
    </Button>
  )
}

export default TanoButton

/**
 * 
 * @param {import("@ui-kitten/components").ButtonProps} props
 */
export const TanoButtonSubmit = (props) => (
  <View
    style={[
      commonStyles.flexHorizontalCenter,
      commonStyles.flexHorizontalMiddle,
      {
        position: "absolute",
        bottom: 16,
        width: Dimensions.get("screen").width
      }
    ]}
  >
    <TanoButton
      {...props}
    >
      {props.children || "Lưu"}
    </TanoButton>
  </View>
)