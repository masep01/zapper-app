import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import { register } from '../Utils/axios';

const SignupScreen = () => {
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
    }
    else{
      console.log('Start Register');
      
      register(username,password,email,age,instagram,twitter).then((response) => {
        user_token = response.token;
        console.log('QUE PUTAS PASA');
        if(response.error){
          console.log('He dado error');
        }
        else{
          console.log('Succesful register');
        }
      });
    }
    //Solo para ir probando
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Age:', age);
    console.log('Instagram:', instagram);
    console.log('Twitter:', twitter);
    console.log('Password:', password);
    console.log('Password2:', conf_passwd);

    

    


    // Por ejemplo, puedes enviar estos datos a un backend
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
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={(text) => setAge(text)}
          value={age}
        />
        <TextInput
          style={styles.input}
          placeholder="Instagram"
          onChangeText={(text) => setInstagram(text)}
          value={instagram}
        />
        <TextInput
          style={styles.input}
          placeholder="Twitter"
          onChangeText={(text) => setTwitter(text)}
          value={twitter}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Repeat your password"
          onChangeText={(text) => setConfPassword(text)}
          value={conf_passwd}
          secureTextEntry
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

export default SignupScreen;
