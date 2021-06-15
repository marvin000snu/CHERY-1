import React from "react"
import styled from "styled-components"

const Menu=(props)=>{
    const {MenuColor, setMenuColor, text, index} = props
    const Menu=styled.TouchableOpacity`
        width:auto;
        height:auto;
        margin-right:15px;
        margin-left:5px;
    `
    const Text=styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:15px;
        font-weight:500;
        color:${MenuColor === index ? "#5471FF":"#909398"}
    `
    if(MenuColor === 0){
        return(
            <Menu onPress={()=>setMenuColor(index)}>
                <Text>&#8226; {text}</Text>
            </Menu>
        )
    }else{
        return(
            <Menu onPress={()=>setMenuColor(index)}>
                <Text>&#8226; {text}</Text>
            </Menu>
        )
    }
    
}
export default Menu