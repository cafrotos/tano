import Stack from "components/Stack";
import { NAMES } from "configs/screens";
import React, { useCallback } from "react";
import CreateTransaction from "./CreateTransaction";
import InputMoney from "./InputMoney"
import SelectGroup from "./SelectGroup";


const screens = [
  {
    name: NAMES.CREATE_TRANSACTION,
    component: CreateTransaction,
  },
  {
    name: NAMES.INPUT_MONEY,
    component: InputMoney
  },
  {
    name: NAMES.SELECT_GROUP,
    component: SelectGroup
  },
]

export default () => {
  const handleRenderScreens = useCallback((Screen) => screens.map((screen, index) => (
    <Screen {...screen} key={index} />
  )), [])

  return (
    <Stack
      onRenderScreens={handleRenderScreens}
      screenOptions={{
        headerStyle: {
        }
      }}
    />
  )
}