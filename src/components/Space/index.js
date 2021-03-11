import { BASE_SIZE } from 'configs/styles';
import React, { Children } from 'react';
import { useMemo } from 'react';
import { View } from 'react-native';
import styles from './styles';

/**
 * 
 * @param {{  
 *  children: import('react').ReactChildren,  
 *  direction: "horizontal" | "vertical",
 *  size?: Number,
 *  viewProps?: import('react-native').ViewProps 
 * }} props
 * 
 */
const Space = ({
  children,
  direction,
  size,
  style,
  ...props
}) => {
  const childrenLength = useMemo(() => Children.count(children) - 1, [children])
  const itemStyle = useMemo(() => {
    const style = {
      ...styles[`${direction || "horizontal"}SpaceItem`]
    };
    const styleKey = direction === "vertical" ? "marginBottom" : "marginLeft"
    if (size) {
      style[styleKey] = size * BASE_SIZE
    }
    return style
  }, [size])


  return (
    <View {...props} style={[styles[direction || "horizontal"], style]}>
      {
        Children.map(children, (child, index) => (
          <View style={index !== childrenLength ? itemStyle : {}}>
            {child}
          </View>
        ))
      }
    </View>
  )
}

export default Space