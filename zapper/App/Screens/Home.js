import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import GoogleMapsView from '../Components/Home/GoogleMapsView';
import { UserLocationContext } from '../Context/CoordinatesContext'
import {getUserInformation} from "../Utils/axios";
import * as Location from "expo-location";
import Search from './Search';
import { CoordinatesProvider } from '../Context/CoordinatesContext';

export default function Home() {
  const [userList, setUserList] = useState([]);
  return (
    <CoordinatesProvider>
      <GoogleMapsView/>
      <Search/>
    </CoordinatesProvider>
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