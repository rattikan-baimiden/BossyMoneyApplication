import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddLimits = ({ navigation }) => {

    const [state, setState] = useState(false);

    return (
        <View style={styles.screen}>
        <Card style={styles.card}>
            <Card.Content>
                <TouchableOpacity style={{
                    paddingRight: 270
                }} onPress={() => {navigation.navigate('Home', {itemId: 86,otherParam: 'anything you want here',});}}>
                <Icon
                    name='chevron-left'
                    size={20}
                    color='black'
                    />       
                </TouchableOpacity>
                <Title style={styles.baseText}>Monthly Balance Limit</Title>
                    
                <TextInput
                    style={[styles.input, styles.bg]}
                />
                    
                <View style={ styles.select}>
                    <Button style={[styles.ColorButton, styles.TabRight]} mode=""
                        onPress={() => { navigation.navigate('Home', { itemId: 86, otherParam: 'anything you want here', }); }}>
                        <Text style={{color: '#1A1A1A'}}>Cancle</Text>
                    </Button>
                    <Button mode="" style={{backgroundColor: '#39E75F',marginLeft: 20}}
                        onPress={() => { navigation.navigate('Home', { itemId: 86, otherParam: 'anything you want here', }); }}>
                        <Text style={{color: '#1A1A1A'}}>Save</Text>
                    </Button>

                </View>
                
            </Card.Content>
            </Card>
            <View style={styles.ViewButton}>
                <Button style={[styles.button, styles.TabRight]} icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png'}} mode="contained"
                    onPress={() => {navigation.navigate('Home', {itemId: 86,otherParam: 'anything you want here',});}}>    
                </Button>  
                
                <Button style={styles.buttonCenter} icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/262/262038.png'}} mode="contained"
                    onPress={() => {navigation.navigate('AddMenu', {itemId: 86,otherParam: 'anything you want here',});}}>    
                </Button>
                
                <Button style={[styles.button, styles.TabLeft]} icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/456/456212.png'}} mode="contained"
                    onPress={() => {navigation.navigate('Profile', {itemId: 86,otherParam: 'anything you want here',});}}>    
                </Button>      
              
            </View>
        </View>
    )
}

export default AddLimits;

const styles = StyleSheet.create({
    buttonCenter: {
        alignSelf: 'center', 
        justifyContent: 'center' ,
        alignItems: 'center',
        backgroundColor: '#ACC5F8'
    },
    TabRight: {
        marginRight: 50
    },
    ColorButton:{
      backgroundColor: '#FF9D5C'
    },
    select : {
      flexDirection: "row",
      justifyContent: 'space-between',
      alignSelf: 'center',
      paddingVertical: 60
    },
    ViewButton : {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    bg: {
        backgroundColor: '#C1C1C1'
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 50,
        alignSelf: "center",
        width: '95%',
        maxWidth: 340,
    },
    TabLeft: {
        marginLeft: 50
    },
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
        paddingBottom: 15,
        paddingTop: 30
    }, 
    card: {
        width: 330,
        height: 350,
        borderRadius: 20
    },
    button: {
        backgroundColor: '#ACC5F8'
    }
});