import { ListItem, Text } from "@ui-kitten/components";
import { renderIcon } from "components";
import Amount from "components/Amount";
import Space from "components/Space";
import React, { useCallback } from "react";

const TransItem = ({
  item,
}) => {
  const renderDesc = useCallback((descProps) => (
    <Space direction="vertical" size={0.25} >
      <Text {...descProps}>
        {item.date.format("LL")}
      </Text>
      <Text {...descProps}>
        {item.description}
      </Text>
    </Space>
  ), [])

  return (
    <ListItem
      title={item.group.title}
      accessoryLeft={renderIcon(item.group.icon)}
      accessoryRight={() => (
        <Amount
          amount={item.amount}
        />
      )}
      description={renderDesc}
      onPress={item.handlePress}
    />
  )
}

export default (props) => <TransItem {...props} />
