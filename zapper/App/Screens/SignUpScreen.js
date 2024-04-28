import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ScrollView} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conf_passwd, setConfPassword] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const handleSignUp = () => {
    // Aquí puedes implementar la lógica para autenticar al usuario
    const dateObj = new Date(birthDate);
    const dia = dateObj.getDate();
    const mes = dateObj.getMonth() + 1;
    const año = dateObj.getFullYear();
    const newDate = `${dia}-${mes}-${año}`;

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Birth Date:', newDate);
    console.log('Instagram:', instagram);
    console.log('Twitter:', twitter);
    console.log('Password:', password);
    console.log('Good PSWD', password == conf_passwd);

    


    // Por ejemplo, puedes enviar estos datos a un backend
  };

  const showDatePicker = () =>{
    setDatePickerVisibility(true);
  }

  const hideDatePicker = () =>{
    setDatePickerVisibility(false);
  }

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
        <TouchableOpacity style={styles.buttonBD} onPress={showDatePicker}>
          <Text style={styles.buttonText}>Select Birth Date</Text> 
        </TouchableOpacity>
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
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode='date'
          onConfirm={(datePicked) => setBirthDate(datePicked)}
          onCancel={hideDatePicker}
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
  buttonBD: {
    backgroundColor: '#3378ed',
    padding: 10,
    borderRadius: 5,
    width: '50%',
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
