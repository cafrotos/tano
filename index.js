import { AppRegistry } from 'react-native';
import "moment/locale/vi"
import moment from "moment"
moment.locale("vi")

import App from './src'
import { name as appName } from './app.json';
import "intitd"

AppRegistry.registerComponent(appName, () => App);
