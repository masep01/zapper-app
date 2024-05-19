import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {login} from "../Utils/axios";

const LoginScreen = ({ navigation, setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const createTwoButtonAlert = (title,msg) =>
    Alert.alert(title, msg, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
  
      { 
        text: 'OK', 
      }
    ]);

  const handleLogIn = async () => {
    console.log('Username:', username);
    console.log('Password:', password);

    if(username == '' || password == ''){
      createTwoButtonAlert('Invalid Input','Neither the username nor the password can be blank');
    }
    else{
      try {
        const response = await login(username, password);
        console.log(response.statusCode);

        if (response.statusCode === 200){
          setLoggedIn(true);
          navigation.navigate('Home');
        }
        else console.error('Error al iniciar sesión:', response.error);
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
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
    backgroundColor: 'blue',
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
