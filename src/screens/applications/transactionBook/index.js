import { Button } from "@ui-kitten/components";
import { renderIcon } from "components";
import BlankHeader from "components/BlankHeader";
import Stack from "components/Stack";
import { NAMES } from "configs/screens";
import themes from "configs/themes";
import moment from "moment";
import React, { useCallback } from "react";
import TransactionBook from "./TransactionBook";

const screens = [
  {
    name: NAMES.TRANSACTION_BOOK,
    component: TransactionBook,
    options: {
      headerStyle: {
        backgroundColor: themes["color-primary-500"],
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerTintColor: '#fff',
    }
  },
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