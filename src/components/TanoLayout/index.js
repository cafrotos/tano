import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Layout } from "@ui-kitten/components";
import React, { useMemo } from "react";
import { StyleSheet } from 'react-native';

/**
 * @param {Object} props
 * @param {import('react').ReactChildren} props.children
 * @param {import('react-native').ViewStyle} props.style
 */
export default ({
  children,
  style
}) => {
  const insets = useSafeAreaInsets()
  const flattenStyle = useMemo(() => StyleSheet.flatten(style || {}), [style])
  return (
    <Layout
      level="2"
      style={[
        flattenStyle,
        {
          paddingBottom: insets.bottom + (flattenStyle.padding || flattenStyle.paddingBottom || flattenStyle.paddingVertical || 0),
          flex: 1,
          position: "relative"
        }
      ]}
    >
      {children}
    </Layout>
  )
}