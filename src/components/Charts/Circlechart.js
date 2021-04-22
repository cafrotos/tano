import React from "react";
import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

export default ({
  data,
  accessor
}) => {
  return (
    <PieChart
      data={data}
      width={Dimensions.get("screen").width}
      height={220}
      chartConfig={chartConfig}
      accessor={accessor}
      backgroundColor={"transparent"}
    />
  )
}