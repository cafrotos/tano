import { useTheme } from "@ui-kitten/components";
import React from "react";
import { Dimensions } from "react-native";
import { formatNumber } from "utils";
import { chartConfig } from "./extends/Bar";
import StackedBar from "./extends/StackedBar";

export default ({
  data,
  labels
}) => {
  const themes = useTheme()
  return (
    <StackedBar
      data={{
        labels: labels || ["NEC", "LTS", "EDU", "PLAY", "FFA", "GIVE"],
        legend: ["Đã chi", "Còn lại", "Vượt mức"],
        data: data || [
          [120, 0, 60],
          [30, 30, 0],
          [30, 30, 0],
          [30, 30, 0],
          [30, 30, 0],
          [30, 30, 0],
        ],
        barColors: [themes["color-basic-400"], themes["color-success-400"], themes["color-danger-400"]]
      }}
      width={Dimensions.get("screen").width}
      style={{
        paddingHorizontal: 8
      }}
      height={360}
      chartConfig={{
        ...chartConfig,
        formatYLabel: (yLabel) => formatNumber(yLabel, "0,0a$"),
      }}
    />
  )
}