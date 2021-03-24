import React from 'react';
import { ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import background from 'assets/images/bg.jpg'
import { Button, Text } from '@ui-kitten/components';
import styles from './styles';
import Space from 'components/Space'
import { useNavigation } from '@react-navigation/native';
import { NAMES } from 'configs/screens';

export default () => {
  const navigation = useNavigation();

  const handlePressEnterPhone = () => navigation.navigate(NAMES.ENTER_PHONE)

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.mainWrapper}
    >
      <View style={styles.sloganWrapper} >
        <Text
          style={styles.title}
        >
          {"TANO"}
        </Text>
        <Text style={styles.slogan} >
          {"Người giúp việc tận tình"}
        </Text>
      </View>
      <View style={styles.actionWrapper} >
        <Space
          direction="vertical"
          size={5}
        >
          <Text style={styles.hint}>
            {"Cô Chú Vui lòng điền số điện thoại ĐỂ BẮT ĐẦU"}
          </Text>
          <Button onPress={handlePressEnterPhone}>
            {"Nhập Số Điện Thoại"}
          </Button>
        </Space>
      </View>
    </ImageBackground>
  )
}