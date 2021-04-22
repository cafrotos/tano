import { Layout, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import UserProfile from "components/Forms/UserProfile";
import Space from "components/Space";
import { TanoButtonSubmit } from "components/TanoButton";
import React, { useContext } from "react";
import useForm from "services/hooks/useForm";
import auth from "services/firebase/auth"

import styles from "./styles"
import { getContext } from "utils";
import { CONTEXTS } from "configs";

const MainContext = getContext(CONTEXTS.MAIN)

export default () => {
  const form = useForm()
  const { updateAppState } = useContext(MainContext)

  const handleSubmit = async (formData) => {
    await auth.currentUser.updateProfile({
      displayName: formData.fullname
    })
    updateAppState({
      displayName: formData.fullname
    })
  }

  return (
    <Layout
      level="1"
      style={[
        commonStyles.mainWrapper,
      ]}
    >
      <Space direction="vertical">
        <Text style={styles.title}>
          {"Cô/chú vui lòng điền thông tin cá nhân"}
        </Text>
        <UserProfile
          form={form}
        />
      </Space>
      <TanoButtonSubmit
        onPress={form.submit(handleSubmit)}
      />
    </Layout>
  )
}