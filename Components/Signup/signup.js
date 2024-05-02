import { Text, View, Image, StyleSheet, Button, Pressable } from 'react-native';
const logo = require('./../../assets/logo.gif')
const google = require('./../../assets/google.png')
const apple = require('./../../assets/apple.png')
const mail = require('../../assets/mail.png')
import googleimg from '../../assets/google.png'
import { useNavigation } from '@react-navigation/native';
export default function SignupPage() {
  const navigation = useNavigation();
  const onpressgoogle = () =>{
    navigation.navigate('Login')
  }
  const onpressgoogle2 = () => {
    navigation.navigate('Login')
  }
  const onpressgoogle3 = () => {
    navigation.navigate('Login')
  }
  return (
    <>
        <View style={styles.container}>
            <Image source={logo}  style={styles.logo} />
        </View>
        <View style={styles.signupcontainer}>
            
            <Pressable onPress={onpressgoogle} style={styles.googlepress}>
                <View style={styles.loginoptions}>
                    <Image source={apple} style={styles.googleicon} /> 
                    <Text >Sign In Using Apple Account</Text>
                </View>
            </Pressable>

            <Pressable onPress={onpressgoogle2} style={styles.googlepress}>
                <View style={styles.loginoptions}>
                    <Image source={google} style={styles.googleicon} /> 
                    <Text >Sign In Using Google Account</Text>
                </View>
            </Pressable>

            <Pressable onPress={onpressgoogle3} style={styles.googlepress}>
                <View style={styles.loginoptions}>
                    <Image source={mail} style={styles.googleicon} /> 
                    <Text >Sign In Using Email Account</Text>
                </View>
            </Pressable>
            <View style={styles.textcontent}>
                <Text style={styles.textcontentcolor} >
                    Why do i need create an account?  
                </Text>
                <Text style={styles.textcontentcolor}>
                    Designed to Protect your data & Privacy
                </Text>
            </View>
            <Pressable onPress={onpressgoogle} style={styles.textcontent} > 
                <View> 
                    <Text style={styles.textcontentcolor}> By Continuing you agree to our </Text>
                </View>
                <Text style={styles.termscon}> Terms & Conditions</Text> 
            </Pressable>
        </View>
    </>
    

  )
 
}

const styles = StyleSheet.create({
      
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%",
    height:"40%",
    backgroundColor:"#090D72",
    
  },
  signupcontainer:{
    width:"100%",
    height:"60%",
    backgroundColor:"#fff"
  },
  googleicon:{
    width:15,
    height:15,
    marginRight:10
  },
  logo: {
    width: 200,
    height: 200,
    
  },
  googlepress:{
    padding:10,
    borderBlockColor:"#999",
    borderStyle:"solid",
    borderWidth:0.5,
    borderRadius:10,
    alignItems:"center",
    margin:10
  },
 
  textcontent:{
   
    alignItems:"center",
    marginTop:15
  },
  textcontentcolor:{
    color:"#59606E",
  },
  textcontent2:{
    
    color:"#59606E",
    marginTop:"20px"
  },
  termscon:{
    fontWeight:"bold",
    color:"#000"
  },
  loginoptions:{
    flexDirection: 'row', // Arrange children horizontally
    justifyContent: 'space-between', // Space items evenly along the main axis
    alignItems: 'center', // Align items along the cross axis
    color:"#59606E",
    padding: 10,
},
});