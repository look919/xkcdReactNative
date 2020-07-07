import  React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Link } from "react-router-native";

import Header from './HeaderComicView';

const ComicView = (...props) => {
  const [json, setJson] = useState({title: '', img: ''});
  const [isLoading, setLoading] = useState(true);

  let id=props[0].location.pathname.replace(/\D/g,'');  //regex deleting non-numeric values such as /{/ that 
                                                          //I couldn't get rid of with slice method
  useEffect(() => {
     fetchData();
   }, [])

  const fetchData = async (fetchLink) => {
    const res = await fetch(`http://xkcd.com/${id}/info.0.json`);
    if(res.ok){
      const data = await res.json();     
      await setJson(data)

      setLoading(false)
    } else {
      alert(`Cannot fetch data. Status: ${res.status}`);
    } 
  }

  return (
    <View style={styles.container}>
      <Header title={json.title} />
      <View style={styles.comic}>
      { isLoading  
      ? <Image style={{width: 250, height: 250}} source={require('../assets/loading.gif')} />
      : <Image style={{flex: 1, width: 320, height: 320, resizeMode: 'contain'}}  
               source={{uri: `${json.img}`}}
         />} 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  comic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 30,
  }
})
export default ComicView;