import {View, Text, StyleSheet, Linking} from 'react-native'
import React from 'react'
import UserItem from './UserItem'

export default function UserList({ coordinates }) { 
  return (
    <View>
      <Text style={{ fontSize: 20, marginTop: 50, marginLeft: 20 }}>
        There are {coordinates.length} people near you
      </Text>
      {coordinates.map((person) => {
        return (
          <UserItem
            key={person.name}
            name={person.name}
            age={person.age}
            insta={person.insta}
            twitter={person.twitter}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 10,
    marginBottom: 30,
    borderWidth: 5,
    textAlign: 'center',
  },
  logos: {
    padding: 5,
    margin: 10,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
  },
});