import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NAMES } from 'configs/screens';
import { AppContext } from '..';
import Starts from './Starts';

const MainStack = createStackNavigator();

export default () => {
  const { user } = useContext(AppContext);

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={NAMES.VERIFY_PHONE}>
        <Starts Screen={MainStack.Screen} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}