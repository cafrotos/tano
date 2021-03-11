import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NAMES } from 'configs/screens';
import Start from './Start';
import BlankHeader from 'components/BlankHeader';
import EnterPhone from './EnterPhone';
import VerifyPhone from './VerifyPhone';

const MainStack = createStackNavigator();

const screens = [
  {
    name: NAMES.START,
    component: Start,
    options: {
      header: BlankHeader
    }
  },
  {
    name: NAMES.ENTER_PHONE,
    component: EnterPhone,
    options: {
      header: BlankHeader
    }
  },
  {
    name: NAMES.VERIFY_PHONE,
    component: VerifyPhone,
    options: {
      header: BlankHeader
    }
  },
  {
    name: NAMES.REGISTRATION,
    component: Start,
    options: {
      header: BlankHeader
    }
  },
]

export default () => (
  <NavigationContainer>
    <MainStack.Navigator>
      {
        screens.map((screen, index) => (
          <MainStack.Screen {...screen} key={index} />
        ))
      }
    </MainStack.Navigator>
  </NavigationContainer>
)