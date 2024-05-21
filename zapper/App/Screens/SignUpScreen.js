import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import { register } from '../Utils/axios';
import * as SecureStore from "expo-secure-store";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conf_passwd, setConfPassword] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [age, setAge] = useState('');
  

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

  const handleSignUp = () => {
    if(password != conf_passwd){
      createTwoButtonAlert('Wrong Password','The passwords provided are not the same');

    } else if (!Number.isInteger(Number(age)) || age === '') {
      createTwoButtonAlert('Invalid Age', 'Please enter a valid integer age.');
      return;
    }
    else{
      
      register(username,password,email,age,instagram,twitter).then((response) => {
        if (response.statusCode === 200) {
          navigation.goBack();
          console.log('User: ' + username + ' successfully registered!');
          alert(username+" successfully registered!")
        }
        else console.error('Error al registrar:', response.error);
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.ScrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={(text) => setAge(text)}
          value={age}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder="Instagram"
          onChangeText={(text) => setInstagram(text)}
          value={instagram}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder="Twitter"
          onChangeText={(text) => setTwitter(text)}
          value={twitter}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder="Repeat your password"
          onChangeText={(text) => setConfPassword(text)}
          value={conf_passwd}
          secureTextEntry
          autoCapitalize='none'
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    marginTop: 50,
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
    marginTop: 10,
    padding: 10,
  },
  datePicker: {
    
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

export default SignupScreen;
