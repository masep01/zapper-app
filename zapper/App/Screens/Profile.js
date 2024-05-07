import {View, Text, TextInput, Platform, StyleSheet} from 'react-native'
import { Button, TextInput as Input } from 'react-native-paper'
import { useState } from 'react'
import React from 'react'
import color from "color";
import {getUserInformation, updateUserInformation} from "../Utils/axios";
import {getToken} from "../Utils/utils";


const token = getToken();
let username = '';
let email = '';
let instagram = '';
let twitter = '';
let loadingScreen = false;

getUserInformation(token).then((response) => {
    username = response.information.username;
    email = response.information?.user_mail || '';
    instagram = response.information?.instagram || '';
    twitter = response.information?.twitter || '';
    loadingScreen = false;
});

export default function Profile({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(email);
    const [instagram, setInsta] = useState(instagram);
    const [twitter, setTwitter] = useState(twitter);

    function updateProfile() {
        setLoading(true);
        updateUserInformation(username, email, instagram, twitter).then((response) => {
            if (response.error) {
                setLoading(false);
            }
        });
    }


  return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.title}>
                  Update your profile
              </Text>
          </View>
          <View style={styles.formContainer}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <Input
                  selectionColor="#79AF6C"
                  underlineColor="transparent"
                  mode="outlined"
                  disabled
                  label={<Text style={styles.label}>Username</Text>}
                  enterKeyHint="next"
                  value={username}
                  autoCapitalize="none"
                  textContentType="username"
              />
              <Input
                  selectionColor="#79AF6C"
                  underlineColor="transparent"
                  mode="outlined"
                  label={<Text style={styles.label}>Email</Text>}
                  enterKeyHint="next"
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
                  enterKeyHint="next"
                  value={instagram}
                  onChangeText={(text) => setInsta(text)}
                  autoCapitalize="none"
              />
              <Input
                  selectionColor="#79AF6C"
                  underlineColor="transparent"
                  mode="outlined"
                  label={<Text style={styles.label}>Twitter</Text>}
                  enterKeyHint="next"
                  value={twitter}
                  onChangeText={(text) => setTwitter(text)}
                  autoCapitalize="none"
              />

              <View
                  style={{
                      marginTop: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                  }}
              >
                  <Button
                      mode="elevated"
                      onPress={() => updateProfile()}
                      buttonColor="#79AF6C"
                      textColor="#FFFFFF"
                      style={{ width: '100%' }}
                      loading={loading}
                  >
                      {loading ? 'Loading...' : 'Confirm changes' }
                  </Button>
              </View>
          </View>
      </View>
      
  )
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
    image: {
        borderRadius: 75,
        width: 150,
        height: 150,
        borderColor: color.secondary,
        borderWidth: 5,
    },
    formContainer: {
        marginTop: 50,
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    label: {
        // backgroundColor: 'black', // Same color as background
        color: '#000',
        fontSize: 20,
        backgroundColor: '#fff',
    },
});