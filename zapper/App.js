import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNavigation';

import * as Location from 'expo-location';
import { UserLocationContext } from './App/Context/UserLocationContext';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>
      <UserLocationContext.Provider value={{location, setLocation}}>
      <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
      </UserLocationContext.Provider>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
});