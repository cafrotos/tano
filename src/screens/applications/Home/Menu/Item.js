import { Button, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import Space from "components/Space";
import React from "react";
import { View } from "react-native";
import styles from "./styles";

export default ({
  icon,
  label,
  onPress
}) => {
  return (
    <View style={styles.itemWrapper}>
      <Space
        direction="vertical"
        style={[
          commonStyles.flexVerticalMiddle,
        ]}
        size={2}
      >
        <Button
          size="large"
          status="control"
          accessoryLeft={renderIcon({ name: icon })}
          style={styles.itemButton}
          onPress={onPress}
        />
        <Text style={[commonStyles.textColorWhite]}>
          {label}
        </Text>
      </Space>
    </View>
  )
}