import React, { useContext } from 'react';
import { ImageBackground, View } from 'react-native';

import background from 'assets/images/bg.jpg'
import { Text } from '@ui-kitten/components';
import styles from './styles';
import Space from 'components/Space'
import { useNavigation } from '@react-navigation/native';
import { NAMES } from 'configs/screens';
import { renderIcon } from 'components';
import { loginWithFacebook } from 'services/firebase/auth';
import { CONTEXTS } from 'configs';
import { getContext } from 'utils';
import TanoButton from 'components/TanoButton';

const MainContext = getContext(CONTEXTS.MAIN)

export default () => {
  const { updateAppState } = useContext(MainContext)
  const navigation = useNavigation();

  const handlePressEnterPhone = () => navigation.navigate(NAMES.ENTER_PHONE)
  const handleLoginWithFacebook = async () => {
    updateAppState({
      loading: true
    })
    try {
      await loginWithFacebook()
    } catch (error) {
      console.log(error)
    }
    updateAppState({
      loading: false
    })
  }
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
          <TanoButton
            accessoryLeft={renderIcon({ name: "facebook" })}
            onPress={handleLoginWithFacebook}
          >
            {"Đăng nhập với Facebook"}
          </TanoButton>
          {/* <TanoButton
            accessoryLeft={renderIcon({ name: "google" })}
            onPress={handleLoginWithGoogle}
          >
            {"Đăng nhập với Google"}
          </TanoButton> */}
          <TanoButton
            accessoryLeft={renderIcon({ name: "phone" })}
            onPress={handlePressEnterPhone}
          >
            {"Nhập Số Điện Thoại"}
          </TanoButton>
        </Space>
      </View>
    </ImageBackground>
  )
}