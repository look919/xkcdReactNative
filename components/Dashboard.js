import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

import AssetExample from './AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



export default function App() {
  return (
    <View style={styles.container}>    
     
        <AssetExample id={2329}/>
        <AssetExample id={2328}/>
        <AssetExample id={2327}/>
        <AssetExample id={2326}/>
        <AssetExample id={2325}/>
        <AssetExample id={2324}/>
        <AssetExample id={2323}/>
        <AssetExample id={2322}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    flexGrow: 1,
  },
});
