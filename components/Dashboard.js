import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

import Comic from './ComicItem';
import Header from './HeaderDashboard'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function Dashboard() {
  return (
    <View style={styles.container}>   
      <Header />
      <View style={styles.comics}>
        <Comic id={2329}/>
        <Comic id={2328}/>
        <Comic id={2327}/>
        <Comic id={2326}/>
        <Comic id={2325}/>
        <Comic id={2324}/>
        <Comic id={2323}/>
        <Comic id={2322}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flexGrow: 1,
  },
  comics: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
  }
});
