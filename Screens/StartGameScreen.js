import React from "react"
import { StyleSheet, TextInput, View, Text, Button  } from 'react-native';

const StartGameScreen = () => {
    return(
        <View style={styles.screen}> 
            <Text style={styles.title}>Start a New Game</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}}/>
                    <Button title="Confirm" onPress={() => {}}/>
                </View>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        padding:10,
        margin:20
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        width:300,
        maxWidth:"80%",
        alignItems:"center",
        justifyContent:"center",
        shadowColor:"black",
        shadowOffset:{ width:0, height:2 },
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:"rgba(85, 188, 237, 0.8)",
        padding:10,
        borderRadius:8
    },
    buttonContainer:{
        flexDirection:"row",
        width:"100%",
        alignItems:"center",
        paddingHorizontal:15,
        justifyContent:"space-between"
    }
})

export default StartGameScreen;
