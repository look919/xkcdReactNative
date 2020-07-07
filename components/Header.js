import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>
        XKCD
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#f9c2ff',
  },
});
