import React from "react"
import styled from "styled-components"
import Arrow from "../../svg/Arrow"

const Styled={
    AutoBox:styled.View`
        width:25px;
        height:auto;
        margin-right:20px;
    `,
}
const Grade_End_Btn=(props)=>{
    const {color, text} = props
    const Btn=styled.TouchableOpacity`
            width:90%;
            height:50px;
            border-radius:50px;
            background-color:${color === 1 ? "#fff":"#5571FF"};
            border:1px solid #5571FF;
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
        `
    const BtnText=styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:20px;
        color:${color === 1 ? "#5571FF":"#fff"}
        font-weight:bold;
    `
    return(
        <Btn>
            <Styled.AutoBox />
            <BtnText>{text}</BtnText>
            <Styled.AutoBox>
                <Arrow color="#fff" />
            </Styled.AutoBox>
        </Btn>
    )
}
export default Grade_End_Btn