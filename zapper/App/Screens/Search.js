import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import UserList from '../Components/Home/UserList';
import { CoordinatesContext } from '../Context/CoordinatesContext';

export default function Search() {
  const { coordinates } = useContext(CoordinatesContext);

  if (!coordinates) {
    return <Text>An error has occurred...</Text>; 
  }

  return (
    <ScrollView>
      <UserList coordinates={coordinates} />
    </ScrollView>
  );
}
