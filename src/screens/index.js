import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { NAMES } from 'configs/screens';
import { getContext } from 'utils';
import { CONTEXTS } from 'configs';
import BlankHeader from 'components/BlankHeader';
import renderStartScreens from './starts';
import renderAppScreen from "./applications"
import Registration from './Registration';
import Stack from 'components/Stack';
import transBooksCollection from 'repositories/transBooks';
import firstTransBook from './firstTransBook';
import Onboarding from './Onboarding';
import Plans from './Plans';

const MainContext = getContext(CONTEXTS.MAIN)

export default () => {
  const { user, isOnboarding, isPlanning } = useContext(MainContext)
  const [isNoTransBook, setIsNoTransBook] = useState(false)
  const subcriber = useMemo(() => {
    if (user) {
      return transBooksCollection()
        .onSnapshot((querySnapshot) => {
          if (querySnapshot && querySnapshot.size) {
            setIsNoTransBook(false)
          }
          else {
            setIsNoTransBook(true)
          }
        })
    }
    return () => { }
  }, [user])

  useEffect(() => {
    return subcriber
  }, [])

  const handleRenderScreens = useCallback((Screen) => {
    if (isOnboarding) {
      return (
        <Screen
          name={NAMES.ONBOARDING}
          component={Onboarding}
          options={{
            header: BlankHeader,
          }}
        />
      )
    }

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

    if (isPlanning) {
      return (
        <Screen
          name={NAMES.SELECT_PLAN}
          component={Plans}
          options={{
            header: BlankHeader,
          }}
        />
      )
    }

    if (isNoTransBook) {
      return firstTransBook(Screen)
    }

    return renderAppScreen(Screen)
  }, [user, isNoTransBook, isPlanning, isOnboarding])

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