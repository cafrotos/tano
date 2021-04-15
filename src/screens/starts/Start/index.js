import React from 'react';
import { ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import background from 'assets/images/bg.jpg'
import { Button, Text } from '@ui-kitten/components';
import styles from './styles';
import Space from 'components/Space'
import { useNavigation } from '@react-navigation/native';
import { NAMES } from 'configs/screens';
import { renderIcon } from 'components';
import { loginWithFacebook } from 'services/firebase/auth';

export default () => {
  const navigation = useNavigation();

  const handlePressEnterPhone = () => navigation.navigate(NAMES.ENTER_PHONE)
  const handleLoginWithFacebook = () => loginWithFacebook()
  const handleLoginWithGoogle = () => navigation.navigate(NAMES.ENTER_PHONE)

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
            {"Bạn vui lòng chọn các mục sau ĐỂ BẮT ĐẦU"}
          </Text>
          <Button
            accessoryLeft={renderIcon({ name: "facebook" })}
            onPress={handleLoginWithFacebook}
          >
            {"Đăng nhập với Facebook"}
          </Button>
          <Button
            accessoryLeft={renderIcon({ name: "google" })}
            onPress={handleLoginWithGoogle}
          >
            {"Đăng nhập với Google"}
          </Button>
          <Button onPress={handlePressEnterPhone}>
            {"Nhập Số Điện Thoại"}
          </Button>
        </Space>
      </View>
    </ImageBackground>
  )
}