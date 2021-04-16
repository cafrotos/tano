import { commonStyles } from "assets/styles";
import themes from "configs/themes";
import _ from "lodash";
import React from "react";
import { Dimensions, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { formatNumber } from "utils";

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  useShadowColorFromDataset: false, // optional
  barPercentage: 0.75,
  decimalPlaces: 0,
  strokeWidth: 2,
  fillShadowGradientOpacity: 0.6,
  formatYLabel: (yLabel) => formatNumber(yLabel, "0,0 a $"),
};

const height = 280
const plus = 40

const Barchart = ({
  positive,
  negative,
  labels
}) => (
  <View
    style={[
      commonStyles.flexHorizontalCenter,
      { height: height + 16 }
    ]}
  >
    <BarChart
      fromZero
      data={{
        datasets: [
          {
            data: positive || [0]
          },
        ]
      }}
      width={Dimensions.get("screen").width - 16}
      height={(height + plus) / 2}
      chartConfig={{
        ...chartConfig,
        // color: (opacity = 1) => themes["color-success-600"],
        fillShadowGradient: themes["color-success-500"],
      }}
      style={{
        backgroundColor: "transparent",
      }}
    />
    <BarChart
      fromZero
      data={{
        labels: labels,
        datasets: [
          {
            data: negative || [0]
          },
        ]
      }}
      width={Dimensions.get("screen").width - 16}
      height={(height + plus) / 2}
      chartConfig={{
        ...chartConfig,
        // color: (opacity = 1) => themes["color-danger-600"],
        fillShadowGradient: themes["color-danger-500"],
      }}
      style={{
        position: "absolute",
        backgroundColor: "transparent",
        bottom: 16,
      }}
    />
  </View>
)

export default Barchart