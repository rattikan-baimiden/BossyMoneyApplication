// In App.js in a new project
import * as React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import AddMenuScreen from './screens/AddMenuScreen';
import HomeScreen from './screens/HomeScreen';

function WelcomeScreen({ navigation }) {

  return (
    <ImageBackground source={require('./asset/image/welcomeScreen.jpg')} resizeMode="cover" style={styles.image}>
      <View style={styles.screen}>
        <Text style={styles.baseText}>
        </Text>
        <Text style={styles.innerText}></Text>
        <Button style={styles.login_button} icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/272/272354.png'}} mode="contained"
          onPress={() => {navigation.navigate('LogIn', {itemId: 86,otherParam: 'anything you want here',});}}>
            Log in
        </Button>
        <Text style={styles.padding}></Text>
        <Button style={styles.signup_button} icon={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_411076.png'}} mode="contained"
          onPress={() => {navigation.navigate('SignUp', {itemId: 86,otherParam: 'anything you want here',});}}>
            Sign up
        </Button>
        
        <Text style={styles.padding}></Text>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    alignItems: 'center',

  },
  innerText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    paddingBottom: 50
  },
  screen: {
    flex: 1, 
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'center' , 
  },
  login_button: {
    width: '100%',
    maxWidth: 340,
    justifyContent: 'center' , 
    backgroundColor: '#4C39D7',
    borderRadius: 30,
    height: 50
  },
  signup_button: {
    width: '100%',
    maxWidth: 340,
    justifyContent: 'center' , 
    backgroundColor: '#4F4F4F',
    borderRadius: 30,
    height: 50
  },
  padding: {
    paddingBottom: 5
  },
  logo: {
    width: 80,
    height: 80,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMenu" component={AddMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;