import { Icon, Layout, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import themes from "configs/themes";
import React from "react";
import { TouchableHighlight } from "react-native";
import { numpad } from "./styles"

const PADS = [
  {
    style: numpad.row,
    level: "2",
    children: [
      {
        style: numpad.cell,
        textStyle: numpad.actionText,
        level: "4",
        children: "+",
      },
      {
        style: numpad.cell,
        textStyle: numpad.actionText,
        level: "4",
        children: "-",
      },
      {
        style: numpad.cell,
        textStyle: numpad.actionText,
        level: "4",
        children: "x",
      },
      {
        style: numpad.cell,
        textStyle: numpad.actionText,
        level: "4",
        children: "÷",
      },
    ]
  },
  {
    style: numpad.row,
    level: "2",
    children: [
      {
        style: numpad.cell,
        level: "2",
        children: "7",
      },
      {
        style: numpad.cell,
        level: "2",
        children: "8",
      },
      {
        style: numpad.cell,
        level: "2",
        children: "9",
      },
      {
        style: numpad.cell,
        level: "4",
        value: "backspace",
        children: <Icon name="backspace-outline" style={commonStyles.icon} fill={themes["color-danger-500"]} />,
      },
    ]
  },
  {
    style: numpad.row,
    level: "2",
    children: [
      {
        style: numpad.cell,
        level: "2",
        children: "4",
      },
      {
        style: numpad.cell,
        level: "2",
        children: "5",
      },
      {
        style: numpad.cell,
        level: "2",
        children: "6",
      },
      {
        style: numpad.cell,
        level: "4",
        children: "C",
      },
    ]
  },
  {
    style: numpad.rowLatest,
    level: "2",
    children: [
      {
        style: numpad.col3,
        level: "2",
        children: [
          {
            style: [numpad.cell, numpad.cellForCol3],
            level: "2",
            children: [
              {
                style: numpad.cell,
                level: "2",
                children: "1",
              },
              {
                style: numpad.cell,
                level: "2",
                children: "2",
              },
              {
                style: numpad.cell,
                level: "2",
                children: "3",
              }
            ]
          },
          {
            style: [numpad.cell, numpad.cellForCol3],
            level: "2",
            children: [
              {
                style: numpad.cell,
                level: "2",
                children: "0",
              },
              {
                style: numpad.cell,
                level: "2",
                children: "000",
              },
              {
                style: numpad.cell,
                level: "2",
                children: ".",
              }
            ]
          }
        ]
      },
      {
        style: { flex: 1 },
        level: "2",
        children: [
          {
            style: [numpad.cell, numpad.submit],
            level: "4",
            value: "submit",
            children: <Icon name="checkmark-outline" style={commonStyles.icon} fill="#ffffff" />,
          },
        ]
      }
    ]
  }
]

const renderPads = (pads, onPress) => (
  pads.map((pad, index) => {
    const props = Object.assign({}, pad)
    delete props.children
    if (pad.children instanceof Array) {
      return (
        <Layout {...props} key={index}>
          {renderPads(pad.children, onPress)}
        </Layout>
      )
    }
    return (
      <TouchableHighlight
        key={index}
        onPress={() => onPress(pad.value || pad.children)}
        style={[
          props.style
        ]}
      >
        <Layout
          {...props}
          style={[
            props.style,
            {
              borderWidth: 0
            }
          ]}
        >
          {
            typeof pad.children === "string" ?
              (
                <Text style={[numpad.bold, pad.textStyle]}>
                  {pad.children}
                </Text>
              ) :
              pad.children
          }
        </Layout>
      </TouchableHighlight>
    )
  })
)

export default ({
  onPress
}) => (
  <>
    {renderPads(PADS, onPress)}
  </>
)