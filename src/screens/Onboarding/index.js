import { CONTEXTS } from "configs";
import themes from "configs/themes";
import React, { useContext, useMemo } from "react";
import Onboarding from 'react-native-onboarding-swiper';
import { getContext } from "utils";
import iconPath from "assets/images/icon.png"
import { Image } from "react-native";

const MainContext = getContext(CONTEXTS.MAIN)

export default () => {
  const { updateAppState } = useContext(MainContext)
  const pages = useMemo(() => ([
    {
      backgroundColor: themes["color-primary-500"],
      title: 'Tano',
      image: <Image source={iconPath} />,
      subtitle: 'Ghi chép chi tiêu một cách có hệ thống',
    },
    {
      backgroundColor: themes["color-info-500"],
      image: <Image source={iconPath} />,
      title: 'Onboarding',
      subtitle: 'Báo cáo tài chính minh bạch',
    },
    {
      backgroundColor: themes["color-success-500"],
      image: <Image source={iconPath} />,
      title: 'Onboarding',
      subtitle: 'Sử dụng các phương pháp quản lý tài chính',
    }
  ]), [])
  return (
    <Onboarding
      pages={pages}
      onDone={() => updateAppState({ isOnboarding: false })}
      onSkip={() => updateAppState({ isOnboarding: false })}
    />
  )
}