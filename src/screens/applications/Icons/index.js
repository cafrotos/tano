import { useNavigation, useRoute } from "@react-navigation/core";
import { Button, Layout, Spinner } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import BlankHeader from "components/BlankHeader";
import Stack from "components/Stack";
import icons from "configs/icons";
import { NAMES } from "configs/screens";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { RefreshControlComponent, ScrollView, View } from "react-native";

const Icons = () => {
  const navigation = useNavigation();
  const { params } = useRoute()
  const [_icons, setIcons] = useState({
    index: 0,
    dataSource: []
  })

  useEffect(() => {
    handleRenderIcons()
  }, [])

  const handlePressItem = (item) => () => {
    if (params?.from) {
      if (typeof params.from === "string") {
        return navigation.navigate(params.from, { icon: item })
      }
      navigation.navigate(params.from.screen, {
        ...params.from.params,
        params: {
          icon: item
        }
      })
    }
  }
  const handleRenderIcons = () => {
    const numberItem = 108
    if (_icons.index < icons.length) {
      setIcons({
        index: _icons.index + numberItem,
        dataSource: _icons.dataSource.concat(icons
          .slice(_icons.index, _icons.index + numberItem)
          .map((icon, iconIndex) => (
            <Button
              key={`${_icons.index}_${iconIndex}`}
              status="control"
              accessoryLeft={renderIcon(icon)}
              onPress={handlePressItem(icon)}
              size="large"
              style={{
                borderRadius: 60,
                height: 60,
                width: 60
              }}
            />
          )))
      })
    }
  }
  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };
  const handleScrollEnd = _.debounce(handleRenderIcons, 100)

  return (
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          handleScrollEnd();
        }
      }}
      scrollEventThrottle={100}
    >
      <Layout
        level="1"
        style={[
          commonStyles.flexHorizontalEvenly,
          {
            flexWrap: "wrap",
            height: "100%"
          }
        ]}
      >
        {
          _icons.dataSource
        }
      </Layout>
      {
        _icons.index < icons.length ? (
          <View style={[commonStyles.flexHorizontalCenter]}>
            <Spinner status="info" size="large" />
          </View>
        ) : null
      }
    </ScrollView>
  )
}

const IconsStack = () => (
  <Stack
    onRenderScreens={(Screen) => <Screen name={NAMES.ICON} component={Icons} />}
  />
)

export default {
  name: NAMES.ICON,
  component: IconsStack,
  options: {
    header: BlankHeader
  }
}