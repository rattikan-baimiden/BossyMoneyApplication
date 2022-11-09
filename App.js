// In App.js in a new project
import * as React from 'react';
import { Button, View, Text, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';

function WelcomeScreen({ navigation }) {
  
  return (
    <View style={styles.screen}>
      <Text style={styles.baseText}>
        Welcome to   
      </Text>
      <Text style={styles.innerText}>Bossy Money !!</Text>
      <Button 
        title="Log in"
        onPress={() => {
          navigation.navigate('LogIn', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button
        title="Sign up"
        onPress={() => {
          navigation.navigate('SignUp', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    alignItems: 'center'
  },
  innerText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white'
  },
  screen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' , 
    backgroundColor: '#ACC5F8'
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
    transform: [{ scaleX: 2 }],
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;