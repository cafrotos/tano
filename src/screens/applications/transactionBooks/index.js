import Stack from "components/Stack";
import React, { useCallback } from "react";
import CreateTransBook from "./CreateTransBook";
import DetailTransBook from "./DetailTransBook";
import EditTransBook from "./EditTransBook";
import TransactionBooks from "./TransactionBooks";

const screens = [
  TransactionBooks,
  CreateTransBook,
  DetailTransBook,
  EditTransBook
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