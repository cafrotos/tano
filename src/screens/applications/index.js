import BlankHeader from 'components/BlankHeader';
import { NAMES } from 'configs/screens';
import React from 'react';
import Home from './Home';

const screens = [
  {
    name: NAMES.HOME,
    component: Home,
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