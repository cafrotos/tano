import { useNavigation, useRoute } from "@react-navigation/core";
import { Button, ListItem, Text } from "@ui-kitten/components";
import { renderIcon } from "components";
import { ICON_PACKS } from "configs";
import { _mockupSelectTimes } from "configs/mockups";
import React, { useRef } from "react";
import { View } from "react-native";
import ActionSheet from "react-native-actions-sheet";

export default () => {
  const actionSheetRef = useRef();
  const navigation = useNavigation();
  const { params } = useRoute()

  const handleSelectTime = (time) => () => {
    actionSheetRef.current?.setModalVisible()
    navigation.setParams({
      ...(params || {}),
      time
    })
  }


  return (
    <>
      <Button
        status="control"
        accessoryLeft={renderIcon({ name: "calendar-check", pack: ICON_PACKS.MATERIAL_COMMUNITY })}
        onPress={() => actionSheetRef.current?.setModalVisible()}
        size="large"
        style={{
          height: 32,
          width: 32,
          borderRadius: 32,
        }}
      />
      <ActionSheet ref={actionSheetRef}>
        <View
          style={{
            paddingVertical: 16
          }}
        >
          <Text category="s1" style={{ textAlign: "center", marginBottom: 16 }}>
            {"Chọn khoảng thời gian"}
          </Text>
          {
            _mockupSelectTimes.map((time, index) => (
              <ListItem
                key={index}
                title={time.name}
                accessoryLeft={renderIcon(time.icon)}
                accessoryRight={params?.time?.name === time.name && renderIcon({ name: "checkmark" })}
                onPress={handleSelectTime(time)}
              />
            ))
          }
        </View>
      </ActionSheet>
    </>
  )
}