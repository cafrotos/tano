import 'react-native-gesture-handler';
import React, { useEffect, useState, createContext } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Spinner } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Screens from 'screens';
import themes from 'configs/themes'
import { onAuthStateChanged } from 'services/firebase/auth';
import { getContext } from 'utils';
import { CONTEXTS } from 'configs';

const MainContext = getContext(CONTEXTS.MAIN)

export default () => {
  const [appState, setAppState] = useState({})
  const [loadingUserProfile, setLoadingUserProfile] = useState(true)

  const updateAppState = (_value) => setAppState(_appState => ({
    ..._appState,
    ..._value
  }))

  useEffect(() => {
    return onAuthStateChanged(handleChangeAuth)
  }, [])

  const handleChangeAuth = (user) => {
    updateAppState({ user })
    setLoadingUserProfile(false)
  }

  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...themes }}
      >
        {
          loadingUserProfile ? (
            <SafeAreaView style={{ height: "100%", alignItems: "center", justifyContent: "center" }}>
              <Spinner size="large" status="info" />
            </SafeAreaView>
          ) : (
            <MainContext.Provider
              value={{
                ...appState,
                updateAppState
              }}
            >
              <Screens />
            </MainContext.Provider>
          )
        }
      </ApplicationProvider>
    </SafeAreaProvider >
  )
};