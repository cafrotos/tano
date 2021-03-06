import { Layout, List } from "@ui-kitten/components";
import ListItemGroup from "components/ListItemGroup";
import { _mockTransGroups } from "configs/mockups";
import { NAMES } from "configs/screens";
import _ from "lodash";
import React, { useEffect } from "react";
import { getTransGroupsHierarchy } from "repositories/transGroups";
import useLoadState from "services/hooks/useLoadState";
import ButtonSearchGroup from "./ButtonSearchGroup";
import TopTabs from "components/TopTabs";
import { TRANS_TYPE } from "configs";
import { useNavigation } from "@react-navigation/core";
import { RefreshControl } from "react-native";
import TanoLayout from "components/TanoLayout";


const SelectGroup = () => {
  const navigation = useNavigation();
  const [transGroups, , loadTransGroups] = useLoadState({
    onGetState: getTransGroupsHierarchy,
    mapping: (dataSource) => _.groupBy(dataSource.map(item => ({
      ...item,
      onPress: () => {
        navigation.navigate(NAMES.CREATE_TRANSACTION, {
          transGroup: item
        })
      }
    })), "type")
  });

  useEffect(() => {
    loadTransGroups()
  }, [])

  return (
    <TanoLayout>
      <TopTabs>
        <List
          refreshControl={
            <RefreshControl
              refreshing={transGroups.loading}
            />
          }
          title={TRANS_TYPE.OUTPUT.title}
          data={transGroups.dataSource[TRANS_TYPE.OUTPUT.value]}
          renderItem={ListItemGroup}
        />
        <List
          title={TRANS_TYPE.INPUT.title}
          refreshControl={
            <RefreshControl
              refreshing={transGroups.loading}
            />
          }
          data={transGroups.dataSource[TRANS_TYPE.INPUT.value]}
          renderItem={ListItemGroup}
        />
      </TopTabs>
    </TanoLayout>
  )
}

export default {
  name: NAMES.SELECT_GROUP,
  component: SelectGroup,
  options: {
    headerRight: ButtonSearchGroup
  }
}