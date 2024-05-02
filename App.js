import { StyleSheet, View, Image } from 'react-native';
import 'react-native-gesture-handler';

const logo = require('./assets/logo.gif')
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, Text} from 'react-native';
import Startpage from './Components/startpage/startpage';
import Secondpage from './Components/startpage/secondpage';
import SignupPage from './Components/Signup/signup';
import LoginForm from './Components/Signup/login';
import Dashboard from './Components/App/Dashboard';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>  
    <Stack.Navigator initialRouteName='Home'>
     <Stack.Screen name="Home" component={Startpage} options={{headerShown: false}} />
      
     <Stack.Screen name="Profile" component={Secondpage} options={{headerShown: false}}  />
     <Stack.Screen name="Signup" component={SignupPage} options={{headerShown: false}}  />
     <Stack.Screen name="Login" component={LoginForm} options={{headerShown: false}}  />
     <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}  />
      
   </Stack.Navigator>
   </NavigationContainer>
  );
}
