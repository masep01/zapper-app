import React, {useState, useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {login} from "../Utils/axios";
import { UserContext } from '../Context/UserContext';

const LoginScreen = ({ navigation, setLoggedIn}) => {
  const { username, setUsername } = useContext(UserContext);
  const [password, setPassword] = useState('');

  const handleLogIn = async () => {
    console.log('Username:', username);
    console.log('Password:', password);
    
    try {
      const response = await login(username, password);
      
      if (response.statusCode === 200){
        navigation.navigate('Home');
        console.log('Welcome', response.username);
        setUsername(response.username);
        setLoggedIn(true);
      }
      else {
        console.error('Error al iniciar sesión:', response.error);
        alert('Wrong username or password');
        setLoggedIn(false);
        
      }
  
    } catch (error) {
      console.error('Error al conectar con BD', error);
      alert('Error trying to connect to server.');
      setLoggedIn(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#79AF6C',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    color: 'blue',
  },
});

export default LoginScreen;
