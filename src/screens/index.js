import React, { useCallback, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { NAMES } from 'configs/screens';
import { getContext } from 'utils';
import { CONTEXTS } from 'configs';
import BlankHeader from 'components/BlankHeader';
import renderStartScreens from './starts';
import renderAppScreen from "./applications"
import Registration from './Registration';
import Stack from 'components/Stack';

const MainContext = getContext(CONTEXTS.MAIN)

export default () => {
  const { user } = useContext(MainContext)

  useEffect(() => {
    console.log(user)
  }, [user])

  const handleRenderScreens = useCallback((Screen) => {
    console.log(user);
    if (!user) {
      return renderStartScreens(Screen)
    }

    if (!user.displayName) {
      return (
        <Screen
          name={NAMES.REGISTRATION}
          component={Registration}
          options={{
            header: BlankHeader,
          }}
        />
      )
    }

    return renderAppScreen(Screen)
  }, [user])

  return (
    <NavigationContainer>
      <Stack
        onRenderScreens={handleRenderScreens}
        screenOptions={{
          headerStyle: {
          }
        }}
        navigatorOptions={{
          // initialRouteName: NAMES.TRANSACTION_BOOK
        }}
      />
    </NavigationContainer>
  )
}