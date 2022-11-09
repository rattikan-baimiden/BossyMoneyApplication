import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, Button } from 'react-native-paper'

const LogInScreen = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View>
            <Text>Login</Text>
            <TextInput
            label="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            />
            <TextInput
            label="Password"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            value={password}
            onChangeText={text => setPassword(text)}
            />
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}> Press me </Button>

        </View>
    )
}

export default LogInScreen

const styles = StyleSheet.create({})