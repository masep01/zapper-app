import {View, Text, Linking, StyleSheet} from 'react-native'
import React from 'react'
import ImageButton from "../ImageButton";

export default function UserItem({name, age, insta, twitter}) {
  return (
      <View style={styles.container}>
          <Text style={{fontSize:30, marginLeft: 5}}>{name}</Text>
          <Text style={{fontSize:20, marginLeft: 5}}>Age: {age}</Text>
          <View style={styles.logos}>
              <ImageButton
                  onPress={() => Linking.openURL('https://www.instagram.com/'+insta)}
                  imageStyle={styles.image}
                  source={require("./../../../assets/insta.png")}
              />
              <ImageButton
                  onPress={() => Linking.openURL('https://twitter.com/'+twitter)}
                  imageStyle={styles.image}
                  source={require("./../../../assets/twitter.png")}
              />
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 10,
        borderWidth: 5,
        textAlign: "center"
    },
    logos: {
        padding: 5,
        margin: 10,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    image: {
        width: 50,
        height: 50
    },
})