// In App.js in a new project
import * as React from 'react';
import { Button, View, Text, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  
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

function LogInScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Log in Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      {/* <Button
        title="Go to LogIn... again"
        onPress={() =>
          navigation.push('LogIn', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      /> */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SignUpScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign up Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      {/* <Button
        title="Go to LogIn... again"
        onPress={() =>
          navigation.push('LogIn', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      /> */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;