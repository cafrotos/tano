import { ICON_PACKS } from 'configs';
import React from 'react';
import { StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

function createIconsMap(IconComponent) {
  const IconProvider = (name) => ({
    toReactElement: (props) => Icon({ name, ...props }),
  });

  const Icon = ({ name, style }) => {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <IconComponent name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  return new Proxy({}, {
    get(target, name) {
      return IconProvider(name);
    },
  });
}

export const MaterialIconsPack = {
  name: ICON_PACKS.MATERIAL,
  icons: createIconsMap(MaterialIcons),
};

export const MaterialCommunityIconsPack = {
  name: ICON_PACKS.MATERIAL_COMMUNITY,
  icons: createIconsMap(MaterialCommunityIcons),
};