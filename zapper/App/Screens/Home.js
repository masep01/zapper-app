import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import GoogleMapsView from '../Components/Home/GoogleMapsView';

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