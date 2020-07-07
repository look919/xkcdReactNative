import React, {useState, useCallback} from 'react';
import { Text, View, StyleSheet, SafeAreaView,TouchableOpacity,FlatList, ScrollView} from 'react-native';
import Constants from 'expo-constants';

import Comic from './ComicItem';
import Header from './HeaderDashboard'

export default function Dashboard() {
  let DATA = [2329,2328,2327,2326,2325,2324,2323,2322];   //ids of latest comics

  const [selected, setSelected] = React.useState(new Map());
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );
  const handleScrolling = (w) => {
    const newItem = DATA[0] - DATA.length;  //bascially id lower by one than previous
    DATA.push(newItem)
  }

  return (
    <View style={styles.container}>   
      <Header />
      <View style={styles.comics}>
      
     <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Comic
            id={item}
            selected={!!selected.get(item)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item}
        extraData={selected}
        onScrollBeginDrag={e => handleScrolling(e)}
        onScrollEndDrag={e => handleScrolling(e)}
      />
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
  },
});