
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-paper';
import { Card, Title, Paragraph } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchUser = async () => {
    const token = await AsyncStorage.getItem('@token')
    const response = await fetch('http://192.168.2.61:8080/api/bossymoney/auth/getUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : token
      },
    })
    const data = await response.json()
    setUser(data.user)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [isLoading])


  const [modal, setModal] = useState(false);

  return (
    <View style={stylesForHomeScreen.screen}>

        <Text style={stylesForHomeScreen.bodyText}>Bossy Money</Text>
        <Text style={stylesForHomeScreen.titleText}>
          <View>
            { isLoading ?
              <Text>Loading</Text>
            :
            <View>
              <Text style={stylesForHomeScreen.titleText}>{user.username}</Text>
            </View>
            }
          </View>
        </Text>

      <View style={stylesForHomeScreen.ViewButton}>
        <Button style={stylesForHomeScreen.ColorButton} mode="contained"
          onPress={() => {navigation.navigate('Home', {itemId: 86,otherParam: 'anything you want here',});}}>
          Overview
        </Button>

        <Button style={stylesForHomeScreen.ColorButton} mode="contained"
          onPress={() => {navigation.navigate('Limits', {itemId: 86,otherParam: 'anything you want here',});}}>
          Limits
        </Button>

        <Button style={stylesForHomeScreen.ColorButton} mode="contained"
          onPress={() => { navigation.navigate('', { itemId: 86, otherParam: 'anything you want here', }); }}>
          Calender
        </Button>
      </View>
            
      <Card style={stylesForHomeScreen.cardStyle}>
        <Card.Content>
          <Title>May 17,2022</Title>
          <Paragraph>Balance</Paragraph>
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

      <Text style={stylesForHomeScreen.normalText}>Recently</Text>

      <Card style={stylesForHomeScreen.cardBottomStyle}>
        <Card.Content>
          <TouchableOpacity style={{
                paddingLeft: 270
            }} onPress={() => {navigation.navigate('FinancialHistory', {itemId: 86,otherParam: 'anything you want here',});}}>
               <Icon
                  name='chevron-right'
                  size={20}
                  color='black'
                />       
            </TouchableOpacity>
          <Title>Foods 10$</Title>
          <Title>Shopping 20$</Title>
        </Card.Content>
      </Card>

      {/* <Button style={stylesForHomeScreen.button} icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/262/262038.png'}} mode="contained"
      onPress={() => {navigation.navigate('AddMenu', {itemId: 86,otherParam: 'anything you want here',});}}>
                
      </Button> */}

      
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => setModal(true)}>
          <Text>Add</Text>
        </TouchableOpacity>

        <Modal isVisible={modal}>
          <View style={{
            backgroundColor: '#FFFFFF',
            paddingTop: 30,
            paddingBottom: 50,
            paddingHorizontal: 30,
            borderRadius: 20,
          }}>
            <TouchableOpacity
                style={{
                  paddingLeft: 270
              }}onPress={() => setModal(false)}>
                <Icon
                  name='close'
                  size={20}
                  color='black'
                />
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#272727',
                textAlign: 'left',
                fontSize: 18
            }}>
              Add
            </Text>
            
            
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                backgroundColor: '#1E90FF',
                paddingVertical: 10,
                borderRadius: 50,
                elevation: 8,
              }} 
              onPress={() => {navigation.navigate('AddIncome', {itemId: 86,otherParam: 'anything you want here',});}}>
              <Text style={{color: '#ffffff'}} >Income</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                backgroundColor: '#1E90FF',
                paddingVertical: 10,
                borderRadius: 50,
                elevation: 8,
              }}
              onPress={() => {navigation.navigate('AddExpenses', {itemId: 86,otherParam: 'anything you want here',});}}>
              <Text style={{color: '#ffffff'}} >Expenses</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                backgroundColor: '#1E90FF',
                paddingVertical: 10,
                borderRadius: 50,
                elevation: 8,
              }}
              onPress={() => {navigation.navigate('AddLimits', {itemId: 86,otherParam: 'anything you want here',});}}>
              <Text style={{color: '#ffffff'}} >Limits</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <View style={stylesForHomeScreen.ViewButton}>
        <Button style={[stylesForHomeScreen.button, stylesForHomeScreen.TabRight]} icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png'}} mode="contained"
          onPress={() => {navigation.navigate('Home', {itemId: 86,otherParam: 'anything you want here',});}}>    
        </Button>  
            
        <Button style={stylesForHomeScreen.buttonCenter} icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/262/262038.png'}} mode="contained"
          onPress={() => {navigation.navigate('AddMenu', {itemId: 86,otherParam: 'anything you want here',});}}>    
        </Button>
            
        <Button style={[stylesForHomeScreen.button, stylesForHomeScreen.TabLeft]} icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/456/456212.png'}} mode="contained"
          onPress={() => {navigation.navigate('Profile', {itemId: 86,otherParam: 'anything you want here',});}}>    
        </Button>      
              
      </View>
      
    </View>
  )
}
const stylesForHomeScreen = StyleSheet.create({
    TabLeft: {
        marginLeft: 50
    },
    buttonCenter: {
        alignSelf: 'center', 
        justifyContent: 'center' ,
        alignItems: 'center',
        backgroundColor: '#ACC5F8'
    },
    TabRight: {
        marginRight: 50
    },
    button: {
        backgroundColor: '#ACC5F8'
    },
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
      fontWeight: 'bold',
      color: '#000000',
      alignSelf:'center',
      paddingBottom:10
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
      margin: 5,
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
    ViewButton: {
        flexDirection: "row",
        justifyContent: 'flex-start',
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

 
export default HomeScreen;

