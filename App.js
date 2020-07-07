import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import Constants from 'expo-constants';

import Dashboard from './components/Dashboard';
import ComicView from './components/ComicView';
import AboutUs from './components/AboutUs'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/" component={Dashboard} />
        <Route path="/info" component={AboutUs} />
        <Route path="/comic/:id" render={props => <ComicView {...props} isAuthed={true} />}/>

        
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: Constants.statusBarHeight+4,
  },
});
