import React, { useContext, useEffect, useState } from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { UserLocationContext } from '../../Context/UserLocationContext';
import {Button} from "react-native-paper";
import {getNearUsers, updateLocation} from "../../Utils/axios";
import {getUsername} from "../../Utils/utils";
import * as Location from "expo-location";
import UserItem from "./UserItem";

export const coordinates = [
  {
    name: "Santi",
    location: {
      latitude: 41.38941,
      longitude: 2.11326,
    },
    age: 21,
    insta: "santioliver9",
    twitter: " ",
  },
  {
    name: "Josep",
    location: {
      latitude: 41.38941,
      longitude: 2.11326,
    },
    age: 21,
    insta: "josep",
    twitter: " ",
  },
]

export default function GoogleMapsView() {
  const [mapRegion, setMapRegion] = useState([])
  const {location, setLocation}= useState(Location.getCurrentPositionAsync({}))

  const [user1, setUser1] = useState({
    latitude: 41.38941,
    longitude: 2.11326,
  });
  const [user2, setUser2] = useState({
    latitude: 41.38960,
    longitude: 2.11305,
  });
  const [user3, setUser3] = useState({
    latitude: 41.39025,
    longitude: 2.11481,
  });

  let username = '';
  getUsername().then((response) => { username = response; });
  console.log(username)
  useEffect(()=>{
    if(location){
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      })
    }
  },[location])

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      region={mapRegion}
      >
        {coordinates.map((coord) => {
          return (
              <Marker coordinate={coord.location} title={coord.name} />
          );
        })}
      </MapView>
      <Button mode="elevated"
              buttonColor="#79AF6C"
              onPress={() => {
                updateLocation(username, location)
                getNearUsers(username)}}
              textColor="#FFFFFF"
              style={{ width: '100%' }}>
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