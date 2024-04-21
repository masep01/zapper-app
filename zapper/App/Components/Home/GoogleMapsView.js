import React, { useContext, useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function GoogleMapsView() {
  const [mapRegion, setmapRegion] = useState([])
  const {location, setLocation}=useContext(UserLocationContext)
  
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});