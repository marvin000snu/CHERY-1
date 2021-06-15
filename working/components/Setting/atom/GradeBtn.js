import React from "react"
import styled from "styled-components"


const GradeBtn=(props)=>{
    const {color, setColor} = props
    const Styled={
        Btn:styled.TouchableOpacity`
            width:60px;
            height:30px;
            border-radius:4px;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:row;
            border:${color === props.text ? "2px solid #5471FF":"1px solid #979CA7"};
        `,
        Text:styled.Text`
            font-size:15px;
            font-weight:400;
            color:#1b2c49;
            font-family:NotoSansKR-Bold;
        `,
    }
    return(
        <Styled.Btn onPress={()=>{setColor(props.text)}}>
            <Styled.Text>{props.text}</Styled.Text>
        </Styled.Btn>
    )
}
export default GradeBtn