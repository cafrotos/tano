import { ListItem, Text } from "@ui-kitten/components";
import { renderIcon } from "components";
import Amount from "components/Amount";
import Space from "components/Space";
import React from "react";

export default ({
  item,
}) => (
  <ListItem
    title={item.title}
    accessoryLeft={renderIcon(item.icon)}
    accessoryRight={() => (
      <Amount
        amount={item.totalAmount}
      />
    )}
    description={item.description}
    onPress={item.handlePress}
  />
)