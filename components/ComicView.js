import  React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Link } from "react-router-native";
import Header from './Header';

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
      console.log('Cannot fetch data', res.status);
    } 
  }

  return (
    <View style={styles.container}>
      <Header title={json.title} />
      <View style={styles.comic}>
      { isLoading  
      ? <Image style={{width: '100%', height: '100%'}}  source={require('../assets/loading.gif')} />
      : <Image style={{width: '100%', height: '100%'}}  source={{uri: `${json.img}`}}
         />} 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flexGrow: 1,
  },
  comic: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
  }
})
export default ComicView;