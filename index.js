// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
//import App from './classwork/Redux/App';
// import { name as appName } from './app.json';
import App from './ReduxPrime/src/App';
//import DrawerApp from './classwork/Drawer/DrawerApp';
const dashboard = () => <App />
AppRegistry.registerComponent("dashboard", () => dashboard);