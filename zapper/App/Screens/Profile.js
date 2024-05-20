import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput as Input } from 'react-native-paper';
import { useEffect, useState } from 'react';
import React, {useContext} from 'react';
import { getUserInformation, updateUserInformation } from "../Utils/axios";
import Popup from '../Components/PopUp';
import { UserContext } from '../Context/UserContext';

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const { username, setUsername } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [instagram, setInsta] = useState('');
  const [twitter, setTwitter] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    (async () => {
      const userInfo = await getUserInformation(username);
      setEmail(userInfo.information?.email || '');
      setInsta(userInfo.information?.instagram || '');
      setTwitter(userInfo.information?.twitter || '');
    })();
  }, []);

  const updateProfile = async () => {
    setLoading(true);
    const response = await updateUserInformation(username, email, instagram, twitter);
    setLoading(false);
    if (response.error) {
      setPopupMessage(`Error: ${response.error}`);
    } else {
      setPopupMessage('Profile updated successfully!');
    }
    setPopupVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Update your profile</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          selectionColor="#79AF6C"
          underlineColor="transparent"
          mode="outlined"
          disabled
          label={<Text style={styles.label}>Username</Text>}
          value={username}
          autoCapitalize="none"
          textContentType="username"
        />
        <Input
          selectionColor="#79AF6C"
          underlineColor="transparent"
          mode="outlined"
          label={<Text style={styles.label}>Email</Text>}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          textContentType="emailAddress"
        />
        <Input
          selectionColor="#79AF6C"
          underlineColor="transparent"
          mode="outlined"
          label={<Text style={styles.label}>Instagram</Text>}
          value={instagram}
          onChangeText={(text) => setInsta(text)}
          autoCapitalize="none"
        />
        <Input
          selectionColor="#79AF6C"
          underlineColor="transparent"
          mode="outlined"
          label={<Text style={styles.label}>Twitter</Text>}
          value={twitter}
          onChangeText={(text) => setTwitter(text)}
          autoCapitalize="none"
        />
        <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            mode="elevated"
            onPress={updateProfile}
            buttonColor="#79AF6C"
            textColor="#FFFFFF"
            style={{ width: '100%' }}
            loading={loading}
          >
            {loading ? 'Loading...' : 'Confirm changes'}
          </Button>
        </View>
      </View>
      <Popup
        visible={popupVisible}
        message={popupMessage}
        onClose={() => setPopupVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  formContainer: {
    marginTop: 50,
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  label: {
    color: '#000',
    fontSize: 20,
    backgroundColor: '#fff',
  },
});
