import { commonStyles } from "assets/styles";
import themes from "configs/themes";
import _ from "lodash";
import React from "react";
import { Dimensions, View } from "react-native";
import { formatNumber } from "utils";
import Bar, { chartConfig } from "./extends/Bar";

const height = 280
const plus = 40

const Barchart = ({
  positive,
  negative,
  labels
}) => (
  <>
    <View
      style={[
        commonStyles.flexHorizontalCenter,
        { height: height + 16 }
      ]}
    >
      <Bar
        fromZero
        data={{
          datasets: [
            {
              data: positive
            },
          ]
        }}
        width={Dimensions.get("screen").width - 16}
        height={(height + plus) / 2}
        chartConfig={{
          ...chartConfig,
          fillShadowGradient: themes["color-success-500"],
          formatYLabel: (yLabel) => formatNumber(positive?.length ? yLabel : 0, "0,0a$"),
        }}
        style={{
          backgroundColor: "transparent",
        }}
        showValuesOnTopOfBars={true}
      />
      <Bar
        fromZero
        data={{
          labels: labels,
          datasets: [
            {
              data: negative
            },
          ]
        }}
        width={Dimensions.get("screen").width - 16}
        height={(height + plus) / 2}
        chartConfig={{
          ...chartConfig,
          fillShadowGradient: themes["color-danger-500"],
          formatYLabel: (yLabel) => formatNumber(negative?.length ? yLabel : 0, "0,0a$"),
        }}
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          bottom: 16,
        }}
        showValuesOnTopOfBars={true}
      />
    </View>
  </>
)

export default Barchart