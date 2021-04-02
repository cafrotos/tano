import { Button, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import { CONTEXTS } from "configs";
import React, { useContext } from "react";
import { View } from "react-native";
import { getContext } from "utils";
import styles from "./styles";

const MainContext = getContext(CONTEXTS.MAIN)

export default () => {
  const { user } = useContext(MainContext)
  return (
    <View
      style={[
        commonStyles.flexHorizontalBetween,
        commonStyles.flexHorizontalMiddle,
      ]}
    >
      <Text style={[commonStyles.textColorWhite]}>
        {"Chào "}
        <Text
          style={[
            styles.displayName,
            commonStyles.textColorWhite
          ]}
        >
          {user?.displayName}
        </Text>{"!"}
      </Text>
      <Button
        size="large"
        style={styles.logoutButton}
        accessoryLeft={renderIcon({ name: "settings", fill: "#ffffff" })}
      />
    </View>
  )
}