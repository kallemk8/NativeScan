import { Text, View, Image, StyleSheet, Button } from 'react-native';
const logo = require('./../../assets/logo.gif')
import { useNavigation } from '@react-navigation/native';
export default function Startpage() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image source={logo}  style={styles.logo} />
      <Button title='Next' onPress={()=>navigation.navigate('Profile')} />
    </View>
  )
 
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1, backgroundColor:"#090D72"
  },
  logo: {
    width: 200,
    height: 200,
  },
});