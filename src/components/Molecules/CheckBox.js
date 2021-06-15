import React from "react"
import { View, StyleSheet, TouchableOpacity } from 'react-native'
const CheckBox = (props) => {
    const { isClicked, onChange } = props
    const styles = StyleSheet.create(
        {
            box: {
                width: 15,
                height: 15,
                borderColor: "#5471FF",
                borderWidth: 1,
                borderStyle: "solid"
            },
            colorBox :{
                width: 15,
                height: 15,
                backgroundColor: "#5471FF",
            }
        }
    )

    return (
        <TouchableOpacity onPress={onChange}>
            <View style={isClicked? styles.colorBox: styles.box}>
            </View>
        </TouchableOpacity>


    )
}

export { CheckBox }