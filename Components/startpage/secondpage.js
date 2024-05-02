import { Pressable, Text, View, Image, StyleSheet } from 'react-native';
const infopage = require('./../../assets/infopage.png')
import { useNavigation } from '@react-navigation/native';
export default function Secondpage() {
    const navigation = useNavigation()
    const onpressskip = () => {
        navigation.navigate('Signup')
    }
    return (
        <>
        <View style={styles.skipcontainer}>
            
        </View>
        <View style={styles.container}>
        <Pressable onPress={onpressskip}  style={styles.skippress}  >
                <Text>Skip</Text>
            </Pressable>
            <Image source={infopage} style={styles.logo} />

            <Text style={styles.boldname}>Scan Card</Text>
            <Text style={styles.simplename}>Simpliy managing contacts   Scan with Accuracy</Text>

            
        </View>
        </>
    )
  
}

const styles = StyleSheet.create({
    skipcontainer:{
        backgroundColor:"#fff",
        marginTop:"10px",
        paddingTop:"20px",
        height:"100px"
    },
    skippress:{
        textAlign:'right',
        padding:"20px",
        marginTop:"30px"

    },  
    container: { 
      justifyContent: 'center',
      alignItems: 'center',
      flex:1, backgroundColor:"#fff"
    },
    logo: {
      width: 200,
      height: 200,
    },
    simplename:{
        
        marginTop:"10px",
        textAlign:"center",
        color:"#333"

    },
    boldname:{
        marginTop:"20px",
         
        fontWeight:"bold",
        color:"#2F2F2F"
    }
  });