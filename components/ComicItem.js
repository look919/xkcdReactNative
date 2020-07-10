import  React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Link } from "react-router-native";

const Comic = ({id}) => {
  const [json, setJson] = useState({title: '', img: '', day: '', month: '', year: ''});
  const [isLoading, setLoading] = useState(true);

   useEffect(() => {
     fetchData();
   }, [])

  const fetchData = async () => {
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
      <View style={styles.text}>
        <Link to={`/comic/${id}`} underlayColor="transparent">
          <Text style={styles.name}>
            {json.title}
          </Text>
        </Link>
        <Link to={`/comic/${id}`} underlayColor="transparent">
          <Text style={styles.date}>
            {json.day && `${json.day}/${json.month}/${json.year}`}
          </Text>
        </Link>
      </View>
     
      { isLoading  
      ? <Image style={{width: 60, height: 40}}  source={require('../assets/loading.gif')} />
      : <Image style={{width: 60, height: 40}}  source={{uri: `${json.img}`}}
         />}     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b3b3ff",
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 12,
    paddingTop: 2,
    paddingBottom: 2,
    marginBottom: 4,
  },
  text: {
    flex: 1,
    margin: 8,
    marginTop: 4,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 8
  },
  date: {
    fontSize: 10,
  },
})
export default Comic;