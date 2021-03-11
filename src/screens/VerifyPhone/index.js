import { Icon, Text } from '@ui-kitten/components';
import VerifyCode from 'components/Forms/VerifyCode';
import Space from 'components/Space';
import TanoButton from 'components/TanoButton';
import themes from 'configs/themes';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAuthByPhone from 'services/hooks/useAuthByPhone';
import useForm from 'services/hooks/useForm';
import styles from './styles';

export default () => {
  const { confirmation } = useAuthByPhone()
  const form = useForm()

  const handleSubmit = async ({ code }) => {
    if (confirmation?.confirm) {
      try {
        const response = await confirmation.confirm(code)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.mainWrapper} >
        <Space
          size={8}
          direction="vertical"
          style={styles.formWrapper}
        >
          <Text style={styles.titlePage}>
            {"Xác nhận số điện thoại"}
          </Text>
          <View style={styles.iconWrapper}>
            <Icon
              name="message-circle-outline"
              fill={themes['color-primary-500']}
              style={styles.icon}
            />
          </View>
          <VerifyCode form={form} />
          <TanoButton onPress={form.submit(handleSubmit)}>
            {"Xác nhận"}
          </TanoButton>
        </Space>
      </View>
    </SafeAreaView >
  )
}