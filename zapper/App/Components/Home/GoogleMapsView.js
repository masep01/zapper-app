import React, { useContext, useEffect, useState } from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { UserLocationContext } from '../../Context/UserLocationContext';
import {Button} from "react-native-paper";
import {getNearUsers} from "../../Utils/axios";
import {getToken} from "../../Utils/utils";

export default function GoogleMapsView() {
  const [mapRegion, setmapRegion] = useState([])
  const {location, setLocation}=useContext(UserLocationContext)

  let username = '';
  getToken().then((response) => { username = response; });

  useEffect(()=>{
    if(location){
      setmapRegion({
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
      </MapView>
      <Button mode="elevated"
              buttonColor="#79AF6C"
              onPress={() => getNearUsers(username)}
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