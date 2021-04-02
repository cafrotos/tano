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
import { KeyboardAvoidingView, Platform } from 'react-native';

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
    updateAppState({
      user: {
        displayName: "Phương"
      }
    })
    setLoadingUserProfile(false)
  }

  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...themes }}
      >
        <SafeAreaView style={{ height: "100%" }}>
          <KeyboardAvoidingView
            behavior={
              Platform.OS === "android" ?
                null :
                "padding"
            }
            style={{ height: "100%" }}
          >
            {
              loadingUserProfile ? (
                <Spinner size="large" status="info" />
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
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ApplicationProvider>
    </SafeAreaProvider >
  )
};