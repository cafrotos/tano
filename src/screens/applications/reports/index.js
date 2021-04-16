import BlankHeader from "components/BlankHeader";
import Stack from "components/Stack";
import { NAMES } from "configs/screens";
import React, { useCallback } from "react";
import Reports from "./Reports";

const screens = [
  Reports
]

const Analysis = () => {
  const handleRenderScreens = useCallback((Screen) => screens.map((screen, index) => (
    <Screen {...screen} key={index} />
  )), [])

  return (
    <Stack
      onRenderScreens={handleRenderScreens}
    />
  )
}

export default {
  name: NAMES.REPORTS,
  component: Analysis,
  options: {
    header: BlankHeader
  }
}