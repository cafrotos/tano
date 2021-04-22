import React from "react";
import { Rect, Text } from "react-native-svg";
import { BarChart } from "react-native-chart-kit";

export const chartConfig = {
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
};

export default class Bar extends BarChart {
  renderValuesOnTopOfBars = ({
    data,
    width,
    height,
    paddingTop,
    paddingRight
  }) => {
    const baseHeight = this.calcBaseHeight(data, height);

    return data.map((x, i) => {
      const barHeight = this.calcHeight(x, data, height);
      const barWidth = 32 * this.getBarPercentage();
      const y = ((baseHeight - barHeight) / 4) * 3 + paddingTop - 1
      return (
        <Text
          key={Math.random()}
          x={
            paddingRight +
            (i * (width - paddingRight)) / data.length +
            barWidth / 1
          }
          y={
            barHeight < -24 ?
              y - 1 :
              barHeight >= 0 ?
                y - 1 :
                y + 14
          }
          fill={this.props.chartConfig.color(0.6)}
          fontSize="12"
          textAnchor="middle"
        >
          {
            typeof this.props?.chartConfig?.formatYLabel === "function" ?
              this.props?.chartConfig?.formatYLabel(data[i]) :
              data[i]
          }
        </Text>
      );
    });
  };
}