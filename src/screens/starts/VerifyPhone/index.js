import { Button, Icon, Text } from '@ui-kitten/components';
import VerifyCode from 'components/Forms/VerifyCode';
import Space from 'components/Space';
import TanoButton from 'components/TanoButton';
import themes from 'configs/themes';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAuthByPhone from 'services/hooks/useAuthByPhone';
import useForm from 'services/hooks/useForm';
import styles from './styles';

export default () => {
  const { confirmation, signIn: handleResendCode } = useAuthByPhone()
  const [isResendConfirm, setIsResendConfirm] = useState(false)
  const form = useForm()

  useEffect(() => {
    setTimeout(() => {
      setIsResendConfirm(true)
    }, 3000);
  }, [])

  const handleSubmit = async ({ code }) => {
    if (confirmation?.confirm) {
      try {
        await confirmation.confirm(code)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
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
        <VerifyCode
          form={form}
          onSubmit={handleSubmit}
        />
        {
          isResendConfirm ? (
            <Space style={styles.resendWrapper}>
              <Text>
                {"Cô/chú không nhận được mã?"}
              </Text>
              <Button
                size="tiny"
                appearance="ghost"
                onPress={handleResendCode}
              >
                {
                  () => <Text style={styles.textButton}>{"Gửi lại"}</Text>
                }
              </Button>
            </Space>
          ) :
            null
        }
      </Space>
    </View>
  )
}