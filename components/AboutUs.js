import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

import Comic from './ComicItem';
import Header from './HeaderComicView'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function AboutUs() {
  return (
    <View style={styles.container}>   
      <Header title={'About us'}/>
      <View style={styles.about}>
         <Text style={styles.text}>
          xkcd, sometimes styled XKCD, is a webcomic created in 2005 by American author Randall Munroe. 
          The comic's tagline describes it as "A webcomic of romance, sarcasm, math, and language". 
        </Text>
        <Text style={styles.text}>          
          Munroe states on the comic's website that the name of the comic is not an initialism, but "just a word 
          with no phonetic pronunciation.
        </Text>
        <Text style={styles.text}>          
          Munroe has been a fan of newspaper comic strips since childhood, describing xkcd as an "heir" to Charles M. 
          Schulz's Peanuts. Despite this influence, xkcd's quirky and technical humor would have been difficult to syndicate 
          in newspapers.
        </Text>

        <Text style={styles.text}>
          App made by Wirkus Tomasz for recruitment purposes.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flexGrow: 1,
  },
  about: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',  
    padding: 12,
    paddingVertical: 65,
  },
  text: {
    textAlign: 'center',
  },
});
