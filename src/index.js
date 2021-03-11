import 'react-native-gesture-handler';
import React, { useEffect, useState, createContext} from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import themes from 'configs/themes'

import Screens from 'screens';
import { onAuthStateChanged } from 'services/firebase/auth';

export const AppContext = createContext();

export default () => {
  const [appState, setAppState] = useState({})

  const updateAppState = (_value) => setAppState(_appState => ({
    ..._appState,
    ..._value
  }))

  useEffect(() => {
    return onAuthStateChanged(handleChangeAuth)
  }, [])

  const handleChangeAuth = (user) => {
    console.log("AppView", user)
  }

  return (
    <AppContext.Provider
      value={{
        ...appState,
        updateAppState
      }}
    >
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          {...eva}
          theme={{ ...eva.light, ...themes }}
        >
          <Screens />
        </ApplicationProvider>
      </SafeAreaProvider>
    </AppContext.Provider>
  )
};
