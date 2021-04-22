import React from "react";
import { Rect, Text } from "react-native-svg";
import { StackedBarChart } from "react-native-chart-kit";

export default class StackedBar extends StackedBarChart {
  renderHorizontalLabels = (
    config
  ) => {
    const {
      count,
      data,
      height,
      paddingTop,
      paddingRight,
      horizontalLabelRotation = 0,
      decimalPlaces = 0,
      formatYLabel = (yLabel) => yLabel,
      verticalLabelsHeightPercentage = DEFAULT_X_LABELS_HEIGHT_PERCENTAGE
    } = config;

    const {
      yAxisLabel = "",
      yAxisSuffix = "",
      yLabelsOffset = 12
    } = this.props;
    return new Array(count === 1 ? 1 : count + 1).fill(1).map((_, i) => {
      let yLabel = String(i * count);

      if (count === 1) {
        yLabel = `${yAxisLabel}${formatYLabel(
          data[0].toFixed(decimalPlaces)
        )}${yAxisSuffix}`;
      } else {
        const label = this.props.fromZero
          ? (this.calcScaler(data) / count) * i + Math.min(...data, 0)
          : (this.calcScaler(data) / count) * i + Math.min(...data);
        yLabel = `${yAxisLabel}${formatYLabel(
          label.toFixed(decimalPlaces)
        )}${yAxisSuffix}`;
      }

      const basePosition = height * verticalLabelsHeightPercentage;
      const x = paddingRight - yLabelsOffset;
      const y =
        count === 1 && this.props.fromZero
          ? paddingTop + 4
          : height * verticalLabelsHeightPercentage -
          (basePosition / count) * i +
          paddingTop;
      return (
        <Text
          rotation={horizontalLabelRotation}
          origin={`${x}, ${y}`}
          key={Math.random()}
          x={x}
          textAnchor="end"
          y={y}
          {...this.getPropsForLabels()}
          {...this.getPropsForHorizontalLabels()}
        >
          {this.props?.chartConfig?.formatYLabel(yLabel)}
        </Text>
      );
    });
  };

  renderBars = ({
    data,
    width,
    height,
    paddingTop,
    paddingRight,
    border,
    colors,
    stackedBar = false,
    verticalLabelsHeightPercentage
  }) =>
    data.map((x, i) => {
      const barWidth = 32 * this.getBarPercentage();
      const ret = [];
      let h = 0;
      let st = paddingTop;

      let fac = 1;
      if (stackedBar) {
        fac = 0.7;
      }
      const sum = this.props.percentile ? x.reduce((a, b) => a + b, 0) : border;
      const barsAreaHeight = height * verticalLabelsHeightPercentage;
      for (let z = 0; z < x.length; z++) {
        h = barsAreaHeight * (x[z] / sum);
        const y = barsAreaHeight - h + st;
        const xC =
          (paddingRight +
            (i * (width - paddingRight)) / data.length +
            barWidth / 1) *
          fac;

        ret.push(
          <Rect
            key={Math.random()}
            x={xC}
            y={y}
            rx={this.getBarRadius(ret, x)}
            ry={this.getBarRadius(ret, x)}
            width={barWidth}
            height={h}
            fill={colors[z]}
          />
        );

        if (!this.props.hideLegend && x[z]) {
          ret.push(
            <Text
              key={Math.random()}
              x={xC + barWidth}
              textAnchor="end"
              y={h > 15 ? y + 15 : y + 7}
              {...this.getPropsForLabels()}
            >
              {
                typeof this.props?.chartConfig?.formatYLabel === "function" ?
                  this.props?.chartConfig?.formatYLabel(x[z]) :
                  x[z]
              }
            </Text>
          );
        }

        st -= h;
      }

      return ret;
    });
}