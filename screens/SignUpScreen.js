
import { SafeAreaView,StyleSheet, Text, View,TextInput} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingBottom: 35}}>
        <Text style={styles.footer}>Sign Up</Text>
        <Text style={styles.tap}>Username</Text>
        <TextInput
          style={[styles.input, styles.bg]}
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <Text style={styles.tap}>Email</Text>
        <TextInput
          style={[styles.input, styles.bg]}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Text style={styles.tap}>Phone Number</Text>
        <TextInput
          style={[styles.input, styles.bg]}
          onChangeText={text => setPhoneNumber(text)}
          value={phoneNumber}
        />
        <Text style={styles.tap}>Password</Text>
        <TextInput
          style={[styles.input, styles.bg]}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>

      <Button style={styles.buttonContainer} mode="contained" 
        onPress={() => {navigation.navigate('Home', {itemId: 86,otherParam: 'anything you want here',});}}> 
        Sign Up 
      </Button>
    </SafeAreaView>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 50,
    alignSelf: "center",
    width: '100%',
    maxWidth: 340,
  },
  tap: {
    width: '100%',
    maxWidth: 340,
    alignSelf: "center",
    justifyContent: "center"
  },
  footer: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 35,
    paddingTop: 35,
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#ACC5F8'
  },
  bg: {
    backgroundColor: '#ffff'
  },
  buttonContainer: {
    alignSelf: "center",
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#4F4F4F',
  }
 
})