import { createStackNavigator } from "@react-navigation/stack";
import { Icon, useTheme } from "@ui-kitten/components";
import React, { useMemo } from "react";
import { Platform, View } from "react-native";

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
  const themes = useTheme()

  return (
    <MainStack.Navigator
      {...navigatorOptions}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: themes["text-basic-color"],
        headerBackImage: ({ tintColor }) => (
          <View
            style={{
              marginLeft: Platform.OS === "android" ? 0 : 12
            }}
          >
            <Icon
              name="arrow-back"
              style={{
                height: 32,
                width: 32,
              }}
              fill={tintColor}
            />
          </View>
        ),
        // headerBackTitle: `${"Quay lại"}`,
        headerTitleAlign: "center",
        headerStatusBarHeight: Platform.OS === "ios" ? 48 : 0,
        ...screenOptions,
      }}
    >
      {onRenderScreens(MainStack.Screen)}
    </MainStack.Navigator>
  )
}

export default Stack