import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import GoogleMapsView from '../Components/Home/GoogleMapsView';
import { UserLocationContext } from '../Context/UserLocationContext'
import {getUserInformation} from "../Utils/axios";

export default function Home() {
  const [placeList,setPlaceList]=useState([]);
  const {location,setLocation}=useContext(UserLocationContext);
  useEffect(()=>{
    if(location)
    {
      GetNearBySearchPlace('restaurant');
    }
  },[location])

  const GetNearBySearchPlace=(value)=>{
    getUserInformation()
  }
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