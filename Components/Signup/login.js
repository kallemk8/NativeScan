import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LoginForm = () => {
    const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Basic email validation
    if (!email.includes('@')) {
      setError('Invalid email address');
      return;
    }

    // Basic password validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    const loginData = {
        email,
        password,
      };
  
      try {
        // Make API call to login endpoint
        const response = await fetch('https://devengine.talentscan.ai/apiV1/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });
  
        // Handle response
        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        // Reset form and error state
        setEmail('');
        setPassword('');
        setError('');
        
        // Handle successful login response here (e.g., store user data, navigate to home screen)
        console.log('Login successful!');
        navigation.navigate('Dashboard')
      } catch (error) {
        setError('Login failed. Please try again.'); // Display generic error message
        console.error('Login error:', error);
      }

  };

  return (
    <View style={styles.container}>
        <Text style={styles.loginpagetext}>
            Login page
        </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
    loginpagetext:{
        fontSize:20,
        marginBottom:20,
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginForm;
