import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddExpenses = ({ navigation }) => {

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
                        
                    <Title style={styles.baseText}>Income</Title>
                    <TextInput
                        style={[styles.input, styles.bg]}
                        />
                        
                    <Title style={[styles.baseText,{paddingTop: 0}]}>Type of Income</Title>
                    <TouchableOpacity style={[styles.input, styles.bg]}>
                        <Text>Select Type</Text>
                        <View style={{paddingLeft: 230}}>  
                            <Icon
                                name='chevron-down'
                                size={20}
                                color='black'
                                />  
                        </View>          
                    </TouchableOpacity>

                    <Title style={[styles.baseText,{paddingTop: 0}]}>Amount</Title>
                    <TextInput
                        style={[styles.input, styles.bg]}
                        />
                
                    <View style={ styles.ViewButton1}>
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
            
            
        </View>
    )
}

export default AddExpenses;

const styles = StyleSheet.create({
    dropdownSelector: {
        width: '90%',
        height: 40,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#000000',
        alignSelf: 'center',
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    TabRight: {
        marginRight: 50
    },
    ViewButton1 : {
      flexDirection: "row",
      justifyContent: 'space-between',
      alignSelf: 'center',
      paddingVertical: 45
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
        maxWidth: 340
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
        paddingTop: 30
    }, 
    card: {
        width: 330,
        height: 500,
        borderRadius: 20
    },
    button: {
        height: 45,
        width: '100%',
        maxWidth: 350,
        backgroundColor: '#1E90FF',
        justifyContent: 'center', 
        borderRadius: 15,
    }
});