import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect  } from 'react';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Card, Title, Paragraph } from 'react-native-paper';



const Limits = ({ navigation}) => {

  

    return (
        <View style={stylesForHomeScreen.screen}>
            <Text style={stylesForHomeScreen.bodyText}>Bossy Money</Text>
            <Text style={stylesForHomeScreen.titleText}>Username</Text>

            <View style={stylesForHomeScreen.ViewButton}>
            <Button style={stylesForHomeScreen.ColorButton} mode="contained"
              onPress={() => {navigation.navigate('Home', {itemId: 86,otherParam: 'anything you want here',});}}>
              Overview
            </Button>

            <Button style={stylesForHomeScreen.ColorButton} mode="contained"
              onPress={() => {navigation.navigate('Limits', {itemId: 86,otherParam: 'anything you want here',});}}>
              Limits
            </Button>
            <Button style={stylesForHomeScreen.ColorButton} mode="contained" onPress={() => console.log('Pressed')}>
                Calender
            </Button>
            </View>
            
            <Card style={stylesForHomeScreen.cardStyle}>
                <Card.Content>
                <Title>Limited Amount</Title>
                <Text style={stylesForHomeScreen.AmountText}>70$</Text>

               

                <View style={stylesForHomeScreen.ViewButton}>
                <Card style={stylesForHomeScreen.ColorAmountButton} mode="contained" onPress={() => console.log('Pressed')}>
                    <Text style={stylesForHomeScreen.text} >Amount Income</Text>
                    <Text style={stylesForHomeScreen.text}>100$</Text> 
                </Card>
                <Card style={stylesForHomeScreen.ColorExpensesButton} mode="contained" onPress={() => console.log('Pressed')}>
                    <Text style={stylesForHomeScreen.text}>Amount Expenses</Text>
                    <Text style={stylesForHomeScreen.text}>30$</Text>  
                </Card>
                </View>

                </Card.Content>
            </Card>

           
           
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
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf:'center',
    padding: 50
  },
  screen: {
    flex: 1, 
    alignItems: 'baseline',
    justifyContent: 'flex-start' , 
    backgroundColor: '#ACC5F8'
  },
  cardStyle: {
          flex: 1.5,
          backgroundColor: '#fffff0',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          width: 325,
          margin: 50,
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
  justifyContent: 'space-between',
  alignSelf: 'center'
},
ColorButton:{
  backgroundColor: '#2f4f4f'
},
ColorAmountButton:{
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  backgroundColor: '#6495ed',
  alignItems:'center',
  alignSelf: 'center',
  width: 125,
},
ColorExpensesButton:{
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  backgroundColor: '#ff8c00',
  justifyContent: 'flex-start',
  width: 125,
  alignSelf: 'center',
  alignItems:'center',
},
button: {
  alignSelf: 'center', 
  justifyContent: 'center' ,
  alignItems: 'center',
  backgroundColor: '#ACC5F8'
},
text: {
  alignSelf: 'center', 
}
});
  

export default Limits;

