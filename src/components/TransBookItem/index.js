import { ListItem, Text } from "@ui-kitten/components";
import { renderIcon } from "components";
import Amount from "components/Amount";
import Space from "components/Space";
import React from "react";

export default ({
  item,
}) => (
  <ListItem
    title={item.name}
    accessoryLeft={renderIcon(item.icon)}
    accessoryRight={() => (
      <Amount
        amount={item.amount || 0}
      />
    )}
    description={item.description}
    onPress={item.handlePress}
  />
)