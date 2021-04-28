import { Button } from "@ui-kitten/components";
import BlankHeader from "components/BlankHeader";
import Stack from "components/Stack";
import TanoLayout from "components/TanoLayout";
import { CONTEXTS } from "configs";
import { NAMES } from "configs/screens";
import React, { useContext } from "react";
import auth from "services/firebase/auth";
import { getContext } from "utils";

const MainContext = getContext(CONTEXTS.MAIN)

const Settings = () => {
  const { updateAppState } = useContext(MainContext)

  const handleLogout = () => {
    updateAppState(null)
    auth.signOut()
  }

  return (
    <TanoLayout>
      <Button
        onPress={handleLogout}
      >
        {"Đăng xuất"}
      </Button>
    </TanoLayout>
  )
}

const SettingsStack = () => (
  <Stack
    onRenderScreens={(Screen) => <Screen name={NAMES.SETTINGS} component={Settings} />}
  />
)

export default {
  name: NAMES.SETTINGS,
  component: SettingsStack,
  options: {
    header: BlankHeader
  }
}