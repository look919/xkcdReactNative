import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function AssetExample() {

console.log('test');
  let isLoading = true;
  const data = fetch('http://xkcd.com/614/info.0.json').then(response => response.json())
  .then(isLoading = false);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      {
      isLoading ? <Image style={styles.logo} source={require('../assets/loading.gif')} />
      : <Image style={styles.logo} source={require(data.img)} />
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
