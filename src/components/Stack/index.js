import { createStackNavigator } from "@react-navigation/stack";
import themes from "configs/themes";
import React, { useMemo } from "react";

/**
 * @callback onRenderScreens
 * @param {import("@react-navigation/stack").StackScreenProps} Screen
 */

/**
 * 
 * @param {Object} props
 * @param {import("@react-navigation/stack").StackNavigationOptions} props.screenOptions
 * @param {import("@react-navigation/routers").DefaultRouterOptions} props.navigatorOptions
 * @param {onRenderScreens} props.onRenderScreens
 * @returns 
 */
const Stack = ({
  screenOptions,
  navigatorOptions,
  onRenderScreens
}) => {
  const MainStack = useMemo(() => createStackNavigator(), []);
  const renderScreens = useMemo(() => onRenderScreens(MainStack.Screen), [MainStack])

  return (
    <MainStack.Navigator
      {...navigatorOptions}
      screenOptions={{
        headerBackTitle: `${"Quay lại"}`,
        ...screenOptions,
      }}
    >
      {renderScreens}
    </MainStack.Navigator>
  )
}

export default Stack