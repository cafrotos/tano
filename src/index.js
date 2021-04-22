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
import { collections } from 'services/firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MainContext = getContext(CONTEXTS.MAIN)

export default () => {
  const [appState, setAppState] = useState({
    loading: true,
    isOnboarding: true,
    isPlanning: false
  })

  const updateAppState = (_value) => {
    if (_value === null) {
      setAppState({
        loading: false,
        isOnboarding: false,
        isPlanning: false
      })
    }
    return setAppState(_appState => ({
      ..._appState,
      ..._value
    }))
  }

  useEffect(() => {
    handleSetOnbarding()
    return onAuthStateChanged(handleChangeAuth)
  }, [])

  const handleChangeAuth = (user) => {
    collections.cleanCollections()
    if (user) {
      collections.getUserDoc()
        .get()
        .then(userDoc => userDoc.data())
        .then(userData => updateAppState({
          loading: false,
          isPlanning: !userData?.plan,
          user
        }))
    }
    else {
      updateAppState({
        loading: false,
        user
      })
    }
  }
  const handleSetOnbarding = async () => {
    // await AsyncStorage.removeItem("@first")
    const isFirstInstall = await AsyncStorage.getItem("@first");
    if (!isFirstInstall) {
      await AsyncStorage.setItem("@first", "true")
    }
    updateAppState({
      isOnboarding: isFirstInstall ? false : true
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