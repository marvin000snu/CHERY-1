import React from "react"
import {Text} from "react-native"

const Percent=(props)=>{
    const {percent} = props
    if(percent >= 65){
        return(
            <Text>Hard</Text>
        )
    }else if(percent >= 40){
        return(
            <Text>Normal</Text>
        )
    }else{
        return(
            <Text>Easy</Text>
        )
    }
}
export default Percent