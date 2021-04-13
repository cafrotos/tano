import Stack from "components/Stack";
import { NAMES } from "configs/screens";
import React, { useCallback } from "react";
import CreateTransaction from "./CreateTransaction";
import InputMoney from "./InputMoney"
import SearchGroup from "./SearchGroup";
import SelectGroup from "./SelectGroup";
import SelectTransBook from "./SelectTransBook";


const screens = [
  {
    name: NAMES.CREATE_TRANSACTION,
    component: CreateTransaction,
  },
  {
    name: NAMES.INPUT_MONEY,
    component: InputMoney
  },
  SelectGroup,
  SearchGroup,
  SelectTransBook
]

export default () => {
  const handleRenderScreens = useCallback((Screen) => screens.map((screen, index) => (
    <Screen {...screen} key={index} />
  )), [])

  return (
    <Stack
      onRenderScreens={handleRenderScreens}
    />
  )
}