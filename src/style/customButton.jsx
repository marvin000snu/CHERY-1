import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'
import theme from "../../src/style/theme"

const CustomButton = (props) =>{
    const {fontSize, height, width, title, onPress, backgroundColor } = props
    const styles = StyleSheet.create({
        button: {
            display : "flex",
            padding : 0.25,
            borderRadius : 1 ,
            alignItems : "center",
            justifyContent: "center",
            color : backgroundColor, 
            backgroundColor : backgroundColor,
            height: height,
            width : width,
            borderRadius : 5,

        },
        text : {
            color : theme.color.white,
            fontSize : fontSize,
            textAlign : "center",
        }
    });
    
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export {CustomButton}

CustomButton.defaultProps = {
    backgroundColor : "blue",
    width : "90%",
    height : 35,
    fontSize: 12
}