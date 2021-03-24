import { createStackNavigator } from "@react-navigation/stack";
import { NAMES } from "configs/screens";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateTransaction from "./CreateTransaction";
import InputMoney from "./InputMoney"

const CreateTransactionStack = createStackNavigator();

const screens = [
  {
    name: NAMES.CREATE_TRANSACTION,
    component: CreateTransaction,
  },
  {
    name: NAMES.INPUT_MONEY,
    component: InputMoney
  }
]

export default () => {
  return (
    <CreateTransactionStack.Navigator
      screenOptions={{
        headerBackTitle: `${"Quay lại"}`
      }}
    >
      {
        screens.map((screen, index) => (
          <CreateTransactionStack.Screen
            {...screen}
            key={index}
          />
        ))
      }
    </CreateTransactionStack.Navigator>
  )
}