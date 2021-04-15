import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import themes from "configs/themes";
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
  const renderScreens = useMemo(() => onRenderScreens(MainStack.Screen), [MainStack])

  return (
    <MainStack.Navigator
      {...navigatorOptions}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: '#000000',
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
        ...screenOptions,
      }}
    >
      {renderScreens}
    </MainStack.Navigator>
  )
}

export default Stack