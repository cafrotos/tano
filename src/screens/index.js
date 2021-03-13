import React, { useContext, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NAMES } from 'configs/screens';
import { getContext } from 'utils';
import { CONTEXTS } from 'configs';
import BlankHeader from 'components/BlankHeader';
import renderStartScreens from './Starts';
import Registration from './Registration';

const MainContext = getContext(CONTEXTS.MAIN)
const MainStack = createStackNavigator();

export default () => {
  const { user } = useContext(MainContext)

  const startScreens = useMemo(() => renderStartScreens(MainStack.Screen), [])

  const renderScreens = useMemo(() => {
    if (!user) {
      return startScreens
    }

    if (!user.displayName) {
      return (
        <MainStack.Screen
          name={NAMES.REGISTRATION}
          component={Registration}
          options={{
            header: BlankHeader
          }}
        />
      )
    }

    return startScreens
  }, [user, startScreens])
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {renderScreens}
      </MainStack.Navigator>
    </NavigationContainer>
  )
}