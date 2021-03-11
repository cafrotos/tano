import { Button, Spinner } from "@ui-kitten/components";
import React, { useCallback, useState } from "react";

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
    typeof props.onPress === "function" && await props.onPress(event)
    setLoading(false)
  }

  const accessoryLeft = useCallback(() => <Spinner size="small" status="info" />, [])

  return (
    <Button
      {...props}
      onPress={handlePress}
      accessoryLeft={loading ? accessoryLeft : props.accessoryLeft}
    >
      {children}
    </Button>
  )
}

export default TanoButton