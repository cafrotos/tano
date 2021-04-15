import { AppRegistry } from 'react-native';
import 'intl';
// import 'intl/locale-data/jsonp/vi-VN';
import "intl/locale-data/jsonp/vi"

import App from './src'
import { name as appName } from './app.json';
import "intitd"

AppRegistry.registerComponent(appName, () => App);
