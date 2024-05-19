import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import UserList from '../Components/Home/UserList';
import { CoordinatesContext } from '../Context/CoordinatesContext';

export default function Search() {
  const { coordinates } = useContext(CoordinatesContext);

  return (
    <ScrollView>
      <UserList coordinates={coordinates} />
    </ScrollView>
  );
}
