import React, { useEffect, useState, useContext } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { getNearUsers, updateLocation } from '../../Utils/axios';
import * as Location from 'expo-location';
import { CoordinatesContext } from '../../Context/CoordinatesContext';
import { UserContext } from '../../Context/UserContext';

export default function GoogleMapsView() {
  const [mapRegion, setMapRegion] = useState(null);
  const [location, setLocation] = useState(null);
  const { username } = useContext(UserContext);
  const { coordinates, setCoordinates } = useContext(CoordinatesContext);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    })();
  }, []);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  const handleZap = async () => {
    if (username && location) {
      await updateLocation(username, location);
      const result = await getNearUsers(username);
      if (!result.error) {
        setCoordinates(result.list);  // Actualiza el estado con los nuevos datos
      }
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      >
        {coordinates.map((coord) => (
          <Marker key={coord.name} coordinate={coord.location} title={coord.name} />
        ))}
      </MapView>
      <Button
        mode="elevated"
        buttonColor="#79AF6C"
        onPress={handleZap}
        textColor="#FFFFFF"
        style={{ width: '100%' }}
      >
        ZAP
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    height: '10%',
    backgroundColor: '#fefbd8',
    textAlign: 'center',
  },
  map: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
});
