
import { SafeAreaView,StyleSheet, Text, View,TextInput, Alert} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogInScreen = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        const response = await fetch('http://192.168.2.54:8080/api/bossymoney/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const data = await response.json()
        if (data.success === true) {
            // Alert.alert(
            //     data.success,
            //     data.msg,
            //     [
            //       { text: "OK", onPress: () => console.log("OK Pressed") }
            //     ]
            // );
            await AsyncStorage.setItem('@token', data.token)
            const token = await AsyncStorage.getItem('@token')
            navigation.navigate('Home', {itemId: 86,otherParam: 'anything you want here',});
        } else {
            Alert.alert(
                data.success,
                data.msg,
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{paddingBottom: 35,}}>
                <Text style={styles.footer}>Log In</Text>
                <Text style={styles.tap}>Email</Text>
                <TextInput
                    style={[styles.input, styles.bg]}
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <Text style={styles.tap}>Password</Text>
                <TextInput
                    secureTextEntry
                    style={[styles.input, styles.bg]}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
            </View>

            <Button style={styles.buttonContainer} mode="contained" onPress={handleLogin}> Log In </Button>
            {/* <Button style={styles.buttonContainer} mode="contained" onPress={() => {navigation.navigate('Home', {itemId: 86,otherParam: 'anything you want here',});}}> Log In </Button> */}

        </SafeAreaView>
    )
}

export default LogInScreen;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 50,
        alignSelf: "center",
        width: '100%',
        maxWidth: 340,
    },
    tap: {
        width: '100%',
        maxWidth: 340,
        alignSelf: "center",
        justifyContent: "center"
    },
    footer: {
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 35,
        paddingLeft: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#ACC5F8',
        width: '100%',
        justifyContent: "center",
    },
    bg: {
        backgroundColor: '#ffff'
    },
    buttonContainer: {
        alignSelf: "center",
        width: '100%',
        maxWidth: 340,
        backgroundColor: '#4F4F4F',
    }
})