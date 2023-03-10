// In App.js in a new project
import * as React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import Limits from './screens/Limits';
import FinancialHistory from './screens/FinancialHistory';
import AddIncome from './screens/AddIncome';
import AddExpenses from './screens/AddExpenses';
import AddLimits from './screens/AddLimits';
// import Calendarsc from './screens/Calendarsc';

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
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LogIn" component={LogInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Limits" component={Limits} options={{ headerShown: false }} />
        <Stack.Screen name="FinancialHistory" component={FinancialHistory} options={{ headerShown: false }} />
        <Stack.Screen name="AddIncome" component={AddIncome} options={{ headerShown: false }} />
        <Stack.Screen name="AddExpenses" component={AddExpenses} options={{ headerShown: false }} />
        <Stack.Screen name="AddLimits" component={AddLimits} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Calendarsc" component={Calendarsc} options={{ headerShown: false }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;