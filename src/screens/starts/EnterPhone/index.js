import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout } from '@ui-kitten/components';

import styles from './styles';
import useForm from 'services/hooks/useForm';
import InputPhone from 'components/Forms/InputPhone';
import { useNavigation } from '@react-navigation/native';
import { NAMES } from 'configs/screens';
import TanoButton from 'components/TanoButton';
import useAuthByPhone from 'services/hooks/useAuthByPhone';

export default () => {
  const form = useForm()
  const navigation = useNavigation();
  const auth = useAuthByPhone()

  const handleSubmit = async ({ phone }) => {
    try {
      await auth.signIn(phone)
      navigation.navigate(NAMES.VERIFY_PHONE)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout level="1" style={styles.mainWrapper}>
      <InputPhone form={form} />
      <TanoButton onPress={form.submit(handleSubmit)}>
        {"Tiếp tục"}
      </TanoButton>
    </Layout>
  )
}