import { Button } from "@ui-kitten/components";
import BlankHeader from "components/BlankHeader";
import Stack from "components/Stack";
import { NAMES } from "configs/screens";
import React from "react";
import auth from "services/firebase/auth";

const Settings = () => {
  return (
    <>
      <Button
        onPress={() => auth.signOut()}
      >
        {"Đăng xuất"}
      </Button>
    </>
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