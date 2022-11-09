import { SafeAreaView,StyleSheet, Text, View,TextInput} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-paper'

const LogInScreen = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <SafeAreaView style={styles.container}>
            <View style={{paddingBottom: 35,}}>
                <Text style={styles.footer}>Log In</Text>
                <Text style={styles.tap}>Username</Text>
                <TextInput
                    style={[styles.input, styles.bg]}
                    onChangeText={text => setUsername(text)}
                    value={username}
                />
                <Text style={styles.tap}>Password</Text>
                <TextInput
                    secureTextEntry
                    style={[styles.input, styles.bg]}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
            </View>

            <Button style={styles.buttonContainer} mode="contained" onPress={() => console.log('Pressed')}> Log In </Button>

        </SafeAreaView>
    )
}

export default LogInScreen

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