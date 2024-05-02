import { Text, View, Image, StyleSheet, Button } from 'react-native';
const logo = require('./../../assets/logo.gif')
import { useNavigation } from '@react-navigation/native';
export default function Dashboard() {
  const navigation = useNavigation()
    
  return (
    <View style={styles.container}>
      <Text style={styles.colorfff}>Welcome to scancard</Text>
    </View>
  )
 
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1, backgroundColor:"#090D72"
  },
  colorfff:{
    color:"#fff"
  }
});