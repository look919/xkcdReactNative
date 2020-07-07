import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header({title}) {
  return (
    <View>
      <Text style={styles.header}>
        {title ? title : 'XKCD' }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 2,
    backgroundColor: '#f9c2ff',
  },
});
