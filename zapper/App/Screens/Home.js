import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import GoogleMapsView from '../Components/Home/GoogleMapsView';
import Header from '../Components/Home/Header';

export default function Home() {
  return (
    <GoogleMapsView/>
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