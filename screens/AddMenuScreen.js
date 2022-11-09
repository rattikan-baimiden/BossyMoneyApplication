import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Card, Title, Paragraph } from 'react-native-paper';


const AddMenuScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Card.Content>
            <Title style={styles.baseText}>Add</Title>
            <Button style={styles.button} icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/3594/3594376.png'}} mode="contained"
                onPress={() => {navigation.navigate('LogIn', {itemId: 86,otherParam: 'anything you want here',});}}>
                Income
            </Button>

            <Text style={styles.padding}></Text>

            <Button style={styles.button} icon={{ uri: 'https://www.pngkey.com/png/full/391-3917613_moneyback-clipart-expense-icon.png'}} mode="contained"
                onPress={() => {navigation.navigate('LogIn', {itemId: 86,otherParam: 'anything you want here',});}}>
                Expenses
            </Button>

            <Text style={styles.padding}></Text>

            <Button style={styles.button} icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/4646/4646090.png'}} mode="contained"
                onPress={() => {navigation.navigate('LogIn', {itemId: 86,otherParam: 'anything you want here',});}}>
                Limits
            </Button>
        </Card.Content>
    </Card>
    </View>

    
  )
}

export default AddMenuScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#ACC5F8'
    },
    baseText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        alignItems: 'center',
        paddingLeft: 15,
        paddingBottom: 15
    
    }, 
    card: {
        width: 330,
        height: 370,
        borderRadius: 20
    },
    button: {
        height: 45,
        width: '100%',
        maxWidth: 350,
        backgroundColor: '#1E90FF',
        justifyContent: 'center', 
        borderRadius: 15,
    },
    padding: {
        paddingBottom: 5
    }
});