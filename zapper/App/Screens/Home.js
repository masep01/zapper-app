import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import GoogleMapsView from '../Components/Home/GoogleMapsView';
import { UserLocationContext } from '../Context/UserLocationContext'
import {getUserInformation} from "../Utils/axios";
import * as Location from "expo-location";

export default function Home() {
  const [userList, setUserList] = useState([]);
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