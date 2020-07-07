import  React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const AssetExample = () => {
  const [json, setJson] = useState({img: ''});
  const [isLoading, setLoading] = useState(true);

   useEffect(() => {
     fetchData();
   }, [])
    
  const fetchData = async () => {
    const res = await fetch('http://xkcd.com/614/info.0.json');
    if(res.ok){
      const data = await res.json();     
      //data.img = `require(${data.img})`
      console.log(data.img);
      await setJson(data)
     
      setLoading(false)
    } else {
      console.log('Cannot fetch data', res.status);
    } 
  
  }


  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      {
      isLoading ? <Image style={styles.logo} source={require('../assets/loading.gif')} />
      : <Image source={{uri: `${json.img}`}}
       style={{width: 80, height: 80}} 
         />
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
})
export default AssetExample;