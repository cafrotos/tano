import { ListItem } from "@ui-kitten/components";
import { renderIcon } from "components";
import Amount from "components/Amount";
import React from "react";

const TransItem = ({
  item,
}) => (
  <ListItem
    title={item.transGroup.title}
    accessoryLeft={renderIcon(item.transGroup.icon)}
    accessoryRight={() => (
      <Amount
        amount={item.amount}
      />
    )}
    description={item.content}
    onPress={item.handlePress}
  />
)

export default (props) => <TransItem {...props} />
