import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './App/Navigation/TabNavigation';
import LoginScreen from './App/Screens/LogInScreen';
import * as Location from 'expo-location';
import { UserProvider } from './App/Context/UserContext';
import SignupScreen from './App/Screens/SignUpScreen';
import HomeScreen from './App/Screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <UserProvider>
      <View style={styles.container}>
        <NavigationContainer>
          {isLoggedIn ? (
            <TabNavigation>
              {/*{props => <Home {...props} location={location}/>}*/}
            </TabNavigation>
          ) : (
            <Stack.Navigator initialRouteName = "LogIn">
            <Stack.Screen name = "LogIn">
              {props => <LoginScreen {...props} setLoggedIn={setLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name = "SignUp" component = {SignupScreen}/>
          </Stack.Navigator>
          )
          }
        </NavigationContainer>
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
});