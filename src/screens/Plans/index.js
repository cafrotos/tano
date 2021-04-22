import { Layout, ListItem, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import Stack from "components/Stack";
import { _mockupPlans } from "configs/mockups";
import React from "react";
import { View } from "react-native";
import DetailPlan from "./DetailPlan";
import Plans from "./Plans";

const screens = [
  Plans,
  DetailPlan
]

export default () => {
  return (
    <Stack
      onRenderScreens={(Screen) => screens.map((screen, index) => <Screen {...screen} key={index} />)}
    />
  )
}