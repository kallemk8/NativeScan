import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
const logo = require('../assets/logo.gif')
import { Stack, useNavigation } from 'expo-router';
export default function Homepage() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090D72',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:200,
    height:200
  }
});
