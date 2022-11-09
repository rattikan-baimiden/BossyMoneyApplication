
import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-paper';
import { Card, Title, Paragraph } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = ({ navigation }) => {


    return (
        <View style={stylesForHomeScreen.screen}>
            <Text style={stylesForHomeScreen.bodyText}>Bossy Money</Text>
            <Text style={stylesForHomeScreen.titleText}>Username</Text>

            <View style={stylesForHomeScreen.ViewButton}>
            <Button style={stylesForHomeScreen.ColorButton} mode="contained" onPress={() => console.log('Pressed')}>
                Overview
            </Button>
            <Button style={stylesForHomeScreen.ColorButton} mode="contained" onPress={() => console.log('Pressed')}>
                Limits
            </Button>
            <Button style={stylesForHomeScreen.ColorButton} mode="contained" onPress={() => console.log('Pressed')}>
                Calender
            </Button>
            </View>
            
            <Card style={stylesForHomeScreen.cardStyle}>
                <Card.Content>
                <Title>May 17,2022</Title>
                <Paragraph>Balance</Paragraph>
                <Text style={stylesForHomeScreen.AmountText}>70$</Text>

                <View style={stylesForHomeScreen.ViewButton}>
                <Button style={stylesForHomeScreen.ColorAmountButton} mode="contained" onPress={() => console.log('Pressed')}>
                    Amount 100$
                </Button>
                <Button style={stylesForHomeScreen.ColorExpensesButton} mode="contained" onPress={() => console.log('Pressed')}>
                    Amount Expenses 30$
            </Button>
                </View>

                </Card.Content>
            </Card>

            <Text style={stylesForHomeScreen.normalText}>Recently</Text>

            <Card style={stylesForHomeScreen.cardBottomStyle}>
                <Card.Content>
                <Title>Foods 10$</Title>
                <Title>Shopping 20$</Title>
                </Card.Content>
            </Card>

            <Button style={stylesForHomeScreen.button} icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/262/262038.png'}} mode="contained"
              onPress={() => {navigation.navigate('AddMenu', {itemId: 86,otherParam: 'anything you want here',});}}>
                
            </Button>
           
        </View>
    )
}
const stylesForHomeScreen = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'auto',
      lineHeight: 150,
      color: '#000000',
      marginLeft: 10
    },
    normalText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'auto',
      lineHeight: 20,
      color: '#000000',
      marginLeft: 10
    },
    bodyText: {
      fontSize: 20,
      fontWeight: 'normal',
      color: '#000000',
      marginLeft: 10
    },
    AmountText: {
      fontSize: 30,
      fontWeight: 'normal',
      color: '#000000',
      alignSelf:'center'
    },
    screen: {
      flex: 1, 
      alignItems: 'baseline',
      justifyContent: 'flex-start' , 
      backgroundColor: '#ACC5F8'
    },
    cardStyle: {
            flex: 1,
            backgroundColor: '#fffff0',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: 325,
            margin: 30,
            justifyContent: 'space-around',
            alignSelf: 'center'
      },
      cardBottomStyle: {
        flex: 1,
        backgroundColor: '#fffff0',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: 325,
        margin: 10,
        alignSelf: 'center'
  },
    ViewButton : {
   
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignSelf: 'center'
  },
  ColorButton:{
    backgroundColor: '#2f4f4f'
  },
  ColorAmountButton:{
    backgroundColor: '#6495ed'
  },
  ColorExpensesButton:{
    backgroundColor: '#ff8c00'
  },
  button: {
    alignSelf: 'center', 
    justifyContent: 'center' ,
    alignItems: 'center',
    backgroundColor: '#ACC5F8'
  }
  });

  

export default HomeScreen;

const styles = StyleSheet.create({})