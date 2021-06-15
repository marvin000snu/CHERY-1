import React from "react"
import styled from "styled-components/native"
import { TouchableWithoutFeedback } from "react-native"

const StatusNavBar = (props) => {
    const {setPresentValue, presentValue,movePage} = props
    const selectHandler = (i) => {
        movePage(i-1)
        setPresentValue(i-1)
    }
    const Styled = {
        nav: styled.View`
        width: 100%;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction : row;
      `,
        navlist: styled.Text`
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 35px;
        color: ${props => props.id !== presentValue+1 ? "#A4B6D6" : "#5471FF"};
        text-align: center;
        font-family: NotoSansKR-Bold;
        font-weight: bold;
      `,
    }
    return (
        <Styled.nav>
            <TouchableWithoutFeedback onPress={() => {
                selectHandler(1)
                 }}>
                <Styled.navlist id={1}>학습한 문항</Styled.navlist>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { 
                selectHandler(2)
            }}>
                <Styled.navlist id={2}> CHERY쌤의 한마디</Styled.navlist>
            </TouchableWithoutFeedback>
        </Styled.nav>
    )

}

export { StatusNavBar }