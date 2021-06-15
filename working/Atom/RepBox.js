import React from "react";
import styled from "styled-components"

import {TouchableWithoutFeedback} from "react-native";
//두개가 연속으로 되면 합쳐지는 것? 때문에 absolute로 해야할 것 같다는 생각이 들었습니다
const RepBox = (props) => {
    const {idx, isOn, days, setDays} = props;
    const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const Styled = {
    box: styled.View`
    width: 14.3%;
    height: 100%;
    justify-content: center;
    align-items:center;
    background-color: ${(isOn)? "#6F87FF": "#fff"} ;
    `,
    boxText: styled.Text`
    color: ${(isOn)? "#fff": "#979CA7"}
    font-family:NotoSansKR-Regular;
    `,
    }
    const onClick = (props) => {
        let arr = [...days];
        arr[idx] = ! arr[idx];
        setDays(arr);
    }
    
    return (
        <TouchableWithoutFeedback onPress = {onClick}>
        <Styled.box>
            <Styled.boxText>
                {day[idx]}
            </Styled.boxText>
        </Styled.box>
        </TouchableWithoutFeedback>
    )
}

export default RepBox;