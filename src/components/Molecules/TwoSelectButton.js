import React, { useState } from "react"
import styled from "styled-components"
import { TouchableWithoutFeedback } from "react-native"
const TwoSelectButton = (props) => {
    const { goLeft, goRight } = props
    const [selected, setSelected] = useState(1)
    const Styled = {
        wrapbox: styled.View`
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction:row;
      `, ChoiceButton: styled.View`
      height : 85%;
      width : 45%;
      border-radius : 4px;
      border :  1px solid ${props => props.isSelected === selected ? "#2786FF" : "#B2B8C2"};
      `,
        ChoiceButtonText: styled.Text`
    color : ${props => props.isSelected === selected ? "#2786FF" : "#B2B8C2"};
    font-size : 18px;
    text-align : center;
    line-height : 40px;
    `
    }
    return (
        <Styled.wrapbox>
            <TouchableWithoutFeedback onPress={()=>{setSelected(1);goLeft()}}>
                <Styled.ChoiceButton isSelected={1}><Styled.ChoiceButtonText isSelected={1}>문항코드로 검색</Styled.ChoiceButtonText></Styled.ChoiceButton>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{setSelected(2);goRight()}}>
                <Styled.ChoiceButton isSelected={2}><Styled.ChoiceButtonText isSelected={2}>출제년도로 검색</Styled.ChoiceButtonText></Styled.ChoiceButton>
            </TouchableWithoutFeedback>
        </Styled.wrapbox>
    )
}


export { TwoSelectButton }