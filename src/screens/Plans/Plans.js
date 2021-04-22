import { useNavigation } from "@react-navigation/core";
import { Layout, ListItem, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import BlankHeader from "components/BlankHeader";
import { _mockupPlans } from "configs/mockups";
import { NAMES } from "configs/screens";
import React from "react";
import { View } from "react-native";

const Plans = () => {
  const navigation = useNavigation();

  const handleSelectPlan = (plan) => () => navigation.navigate(NAMES.DETAIL_PLAN, { plan })

  return (
    <Layout
      level="1"
      style={{
        height: "100%",
        padding: 16
      }}
    >
      <View
        style={[
          commonStyles.flexVerticalMiddle,
          commonStyles.flexVerticalCenter,
          {
            flex: 1
          }
        ]}
      >
        <Text
          category="s1"
          style={{
            fontSize: 24,
            fontWeight: "500",
            textAlign: "center"
          }}
        >
          {"Hãy chọn phương pháp mà bạn nghĩ rằng sẽ phù hợp với bản thân."}
        </Text>
      </View>
      <View style={{
        flex: 3
      }}>
        {
          _mockupPlans.map((plan, index) => (
            <ListItem
              key={index}
              title={plan.title}
              accessoryLeft={plan.icon && renderIcon(plan.icon)}
              description={plan.description}
              onPress={handleSelectPlan(plan)}
            />
          ))
        }
      </View>
    </Layout>
  )
}

export default {
  name: NAMES.SELECT_PLAN,
  component: Plans,
  options: {
    header: BlankHeader
  }
}