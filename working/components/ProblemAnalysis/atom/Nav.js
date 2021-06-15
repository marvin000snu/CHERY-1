import React from "react"
import styled from "styled-components"


const Nav=(props)=>{
    const {text, NavColor, setNavColor, index} = props
    const Nav=styled.TouchableOpacity`
        width:33.3%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
    `
    const NavText=styled.Text`
        color:${index === NavColor ? "#5571FF":"#909398"};
        font-family:NotoSansKR-Bold;
        font-size:16px;
        font-weight:bold;
    `
    if(text === "Question Information"){
        return(
            <Nav onPress={()=>{setNavColor(index)}}>
                <NavText>문항정보</NavText>
            </Nav>
        )
    }else if(text === "Explanation paper"){
        return(
            <Nav onPress={()=>{setNavColor(index)}}>
                <NavText>해설지</NavText>
            </Nav>
        )
    }else{
        return(
            <Nav onPress={()=>{setNavColor(index)}}>
                <NavText>어휘</NavText>
            </Nav>
        )
    }
}
export default Nav
