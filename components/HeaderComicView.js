import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Link, Redirect } from "react-router-native";

export default function Header({title}) {

  const randomId = Math.floor(Math.random() * 2330);  


  return (
    <View style={styles.container}>
      <Link to={`/`} underlayColor="transparent">
        <View style={styles.icon}>
          <Image style={{height:20, width: 20 }}source={require('../assets/back.png')} />  
          <Text style={styles.iconText}>Go Back</Text>    
        </View>
      </Link>
      
      <Text style={styles.header}>
        {title}
      </Text>

      <Link to={`/info`} underlayColor="transparent">
        <View style={styles.icon}>
          <Image style={{height:20, width: 20 }}source={require('../assets/info.png')} />  
          <Text style={styles.iconText}>About us</Text>    
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9c2ff',
    padding: 3,
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexGrow: 0,
    alignItems: "center",
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 2,
    backgroundColor: '#f9c2ff',
  },
  icon: {
    alignItems: "center",
    marginTop: 6,
  },
  iconText: {
    fontSize: 10,
  },
});
