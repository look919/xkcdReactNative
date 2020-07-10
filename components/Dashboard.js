import React, {useState, useCallback, useEffect} from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView,TouchableOpacity,FlatList, ScrollView} from 'react-native';
import Constants from 'expo-constants';

import Comic from './ComicItem';
import Header from './HeaderDashboard'

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {     
    fetchData();
  }, [])

  const fetchData = async () => {
    const res = await fetch(`http://xkcd.com/info.0.json`);
    if(res.ok){
      let json = await res.json();     
      for(let i=0; i<8; i++){
        data.push(json.num)
        json.num-=1;
      }
      await setLoading(false);
    } else {      
      for(let i=0; i<8; i++){
        const randomId = Math.floor(Math.random() * 2330);  //if there was a problem with fetching put some random ids instead
        data.push(randomId)
      }
      await setLoading(false);
    } 
  }

  const [selected, setSelected] = useState(new Map());
  const onSelect = useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected],
  );

  
  const handleScrolling = (w) => {
    const newItem = data[0] - data.length;  //bascially id lower by one than previous
    setData([...data, newItem])
  }

  return (
    <View style={styles.container}>   
      <Header />
      <View style={styles.comics}>
      {isLoading 
      ? <Image style={{width: 320, height: 320, alignSelf: 'center'}}  source={require('../assets/loading.gif')} />
      : <FlatList
        data={data}
        style={styles.list}
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
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  comics: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  list: {
    flex: 1,
    height: '100%',
  },
});