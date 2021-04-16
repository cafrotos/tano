import 'react-native-gesture-handler';
import React, { useEffect, useState, createContext } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Modal, Spinner } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Screens from 'screens';
import themes from 'configs/themes'
import { onAuthStateChanged } from 'services/firebase/auth';
import { getContext } from 'utils';
import { CONTEXTS } from 'configs';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialCommunityIconsPack, MaterialIconsPack } from 'components/3rdIcon';
const MainContext = getContext(CONTEXTS.MAIN)

export default () => {
  const [appState, setAppState] = useState({
    loading: true
  })

  const updateAppState = (_value) => setAppState(_appState => ({
    ..._appState,
    ..._value
  }))

  useEffect(() => {
    return onAuthStateChanged(handleChangeAuth)
  }, [])

  const handleChangeAuth = (user) => {
    updateAppState({
      loading: false,
      user
    })
  }

  return (
    <SafeAreaProvider>
      <IconRegistry icons={[EvaIconsPack, MaterialIconsPack, MaterialCommunityIconsPack]} />
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
            <MainContext.Provider
              value={{
                ...appState,
                updateAppState
              }}
            >
              <Screens />
              <Modal
                visible={appState.loading}
                backdropStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  width: "100%",
                  height: "100%"
                }}
              >
                <Spinner size="large" status="info" />
              </Modal>
            </MainContext.Provider>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ApplicationProvider>
    </SafeAreaProvider >
  )
};