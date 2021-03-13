import React from 'react';

import BlankHeader from 'components/BlankHeader';
import { NAMES } from 'configs/screens';
import Start from './Start';
import EnterPhone from './EnterPhone';
import VerifyPhone from './VerifyPhone';

const screens = [
  {
    name: NAMES.START,
    component: Start,
    options: {
      header: BlankHeader
    }
  },
  {
    name: NAMES.ENTER_PHONE,
    component: EnterPhone,
    options: {
      header: BlankHeader
    }
  },
  {
    name: NAMES.VERIFY_PHONE,
    component: VerifyPhone,
    options: {
      header: BlankHeader
    }
  },
  {
    name: NAMES.REGISTRATION,
    component: Start,
    options: {
      header: BlankHeader
    }
  },
]

export default (Screen) => (
  <>
    {
      screens.map((screen, index) => (
        <Screen {...screen} key={index} />
      ))
    }
  </>
)