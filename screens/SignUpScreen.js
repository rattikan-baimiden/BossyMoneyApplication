
import { SafeAreaView,StyleSheet, Text, View,TextInput,Alert} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone_number, setPhone_number] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {
    const response = await fetch('http://10.65.5.46:8080/api/bossymoney/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            phone_number: phone_number
        })
    })
    const data = await response.json()
    if (data.success === true) {
        // Alert.alert(
        //     "Successfully signed up.",
        //     [
        //       { text: "OK", onPress: () => console.log("OK Pressed") }
        //     ]
        // );
        await AsyncStorage.setItem('@token', data.token)
        const token = await AsyncStorage.getItem('@token')
        navigation.navigate('LogIn', {itemId: 86,otherParam: 'anything you want here',});
    } else {
        Alert.alert(
            data.success,
            data.msg,
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }
  }

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
          onChangeText={text => setPhone_number(text)}
          value={phone_number}
        />
        <Text style={styles.tap}>Password</Text>
        <TextInput
          style={[styles.input, styles.bg]}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>

      <Button style={styles.buttonContainer} mode="contained" onPress={handleSignup}> Sign Up </Button>

      {/* <Button style={styles.buttonContainer} mode="contained" 
        onPress={() => {navigation.navigate('LogIn', {itemId: 86,otherParam: 'anything you want here',});}}> 
        Sign Up 
      </Button> */}
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

