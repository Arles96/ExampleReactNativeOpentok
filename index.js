/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./App/Home";
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Publish from "./App/Publish";
import Viewer from "./App/Viewer";
import Styles from './App/Styles'
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {name as appName} from './app.json';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

const TokBot = props => {
  return <App navigation={props.navigation} />;
};

TokBot.navigationOptions = {
  title: "Tok-Bot"
};

const SimpleAppStack = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
    }),
  },
  Publish: {
    screen: Publish,
  },
  Viewer: {
    screen: Viewer,
  },
});

const SimpleApp = createAppContainer(SimpleAppStack);

AppRegistry.registerComponent(appName, () => SimpleApp);