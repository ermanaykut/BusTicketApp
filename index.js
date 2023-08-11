/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './src/router/Router.tsx';
import {name as appName} from './app.json';
import 'moment/locale/tr';

AppRegistry.registerComponent(appName, () => Router);
