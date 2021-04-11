import { useNavigation } from "@react-navigation/core";
import { Button } from "@ui-kitten/components";
import { renderIcon } from "components";
import { NAMES } from "configs/screens";
import React from "react";

export default () => {
  const navigation = useNavigation()
  return (
    <Button
      style={{
        height: 30,
        width: 30,
        borderRadius: 30
      }}
      onPress={() => navigation.navigate(NAMES.SEARCH_GROUP)}
      status="control"
      accessoryLeft={renderIcon({ name: "search" })}
    />
  )
}
