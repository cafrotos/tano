import { useRoute } from "@react-navigation/core";
import { Divider, Icon, Layout, List, ListItem, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Space from "components/Space";
import { TanoButtonSubmit } from "components/TanoButton";
import { CONTEXTS } from "configs";
import { NAMES } from "configs/screens";
import React, { useContext } from "react";
import { collections } from "services/firebase/firestore";
import { formatNumber, getContext } from "utils";

const MainContext = getContext(CONTEXTS.MAIN)

const DetailPlan = () => {
  const { params } = useRoute();
  const { updateAppState } = useContext(MainContext)

  const handleSelectPlan = async () => {
    await collections.getUserDoc().set({
      plan: params.plan
    })
    updateAppState({
      isPlanning: false
    })
  }

  return (
    <Layout
      level="1"
      style={{
        height: "100%",
        padding: 16
      }}
    >
      <List
        style={{
          backgroundColor: "transparent"
        }}
        data={params?.plan?.groups}
        ItemSeparatorComponent={Divider}
        renderItem={({ item, index }) => (
          <ListItem
            {...item}
            key={index}
            disabled
            accessoryLeft={(iconProps) => (
              <Text style={{ color: iconProps.style.tintColor, fontSize: 18 }}>
                {formatNumber(Math.floor(item.value * 100), "00")}%
              </Text>
            )}
          />
        )}
      />
      <TanoButtonSubmit
        onPress={handleSelectPlan}
      >
        {"Chọn phương pháp này"}
      </TanoButtonSubmit>
    </Layout>
  )
}

export default {
  name: NAMES.DETAIL_PLAN,
  component: DetailPlan,
  options: ({ route }) => ({
    headerTitle: (
      <Text category="s1">
        {route.params?.plan?.title}
      </Text>
    )
  })
}