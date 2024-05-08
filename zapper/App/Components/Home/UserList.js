import {View, Text, StyleSheet, Linking} from 'react-native'
import React from 'react'
import UserItem from './UserItem'
import {Button} from "react-native-paper";
import ImageButton from "../ImageButton";

export default function UserList() {
  return (
    <View>
      <Text
        style={{fontSize:20, marginTop:50, marginLeft: 20}}>
            There are 3 Users near you
      </Text>
      <View style={styles.container}>
        <Text style={{fontSize:30, marginLeft: 5}}>Santi</Text>
          <Text style={{fontSize:20, marginLeft: 5}}>Age: 20</Text>
          <View style={styles.logos}>
              <ImageButton
                  onPress={() => Linking.openURL('https://www.instagram.com/santioliver9')}
                  imageStyle={styles.image}
                  source={require("./../../../assets/insta.png")}
              />
              <ImageButton
                  onPress={() => Linking.openURL('https://twitter.com/')}
                  imageStyle={styles.image}
                  source={require("./../../../assets/twitter.png")}
              />
          </View>
      </View>
        <View style={styles.container}>
            <Text style={{fontSize:30, marginLeft: 5}}>Josep</Text>
            <Text style={{fontSize:20, marginLeft: 5}}>Age: 21</Text>
            <View style={styles.logos}>
                <ImageButton
                    onPress={() => Linking.openURL('https://www.instagram.com/josepmg1')}
                    imageStyle={styles.image}
                    source={require("./../../../assets/insta.png")}
                />
                <ImageButton
                    onPress={() => Linking.openURL('https://twitter.com/')}
                    imageStyle={styles.image}
                    source={require("./../../../assets/twitter.png")}
                />
            </View>
        </View>
        <View style={styles.container}>
            <Text style={{fontSize:30, marginLeft: 5}}>Martin</Text>
            <Text style={{fontSize:20, marginLeft: 5}}>Age: 20</Text>
            <View style={styles.logos}>
                <ImageButton
                    onPress={() => Linking.openURL('https://www.instagram.com/thereal12martin')}
                    imageStyle={styles.image}
                    source={require("./../../../assets/insta.png")}
                />
                <ImageButton
                    onPress={() => Linking.openURL('https://twitter.com/')}
                    imageStyle={styles.image}
                    source={require("./../../../assets/twitter.png")}
                />
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 10,
        marginBottom: 30,
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