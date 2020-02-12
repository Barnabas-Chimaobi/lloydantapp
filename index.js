/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Invoice from "./src/components/Invoice"
import Invoice1 from "./src/components/Invoice1"

AppRegistry.registerComponent(appName, () => Invoice);
