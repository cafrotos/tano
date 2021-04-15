import { Text } from '@ui-kitten/components';
import BlankHeader from 'components/BlankHeader';
import { NAMES } from 'configs/screens';
import React from 'react';
import createTransaction from './createTransaction';
import Home from './Home';
import Icons from './Icons';
import Settings from './Settings';
import transactionBooks from './transactionBooks';

const screens = [
  {
    name: NAMES.HOME,
    component: Home,
    options: {
      header: BlankHeader
    }
  },
  {
    name: NAMES.CREATE_TRANSACTION,
    component: createTransaction,
    options: {
      header: BlankHeader
    }
  },
  {
    name: NAMES.TRANSACTION_BOOK,
    component: transactionBooks,
    options: {
      header: BlankHeader
    }
  },
  Icons,
  Settings
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