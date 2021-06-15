import React from "react";
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import RepBox from "../Atom/RepBox";

const Styled = {
    background: styled.View`
        width: ${wp(98)}px;
        height: ${hp(15)}px;
        align-items: center;
        justify-content: center;
    `,
    header: styled.View`
    width: ${wp(95)}px;
    margin-bottom: ${hp(1)}px;
    `,
    headerText: styled.Text`
    fontFamily: "NotoSansCJKkr-Regular";
    font-size: ${wp(5)}px;
    left: ${wp(2)}px;
    margin-bottom: ${hp(1)}px;
    `,
    section: styled.Text`
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
    `,
    boxes: styled.View`
    width: ${wp(90)}px;
    flex-flow:row;
    background-color: gray;
    align-items: center;
    height: ${hp(5)}px;
    border-radius: ${hp(1)}px;
    overflow: hidden;
    `,
}
const Repetition = (props) => {
    const {days, setDays} = props;
    let selectedBox = days.map( (v,idx) => {
        return(
            <RepBox idx = {idx} isOn = {v} days = {days} setDays ={setDays}/>
        )
    })
    return (
        <Styled.background>
            <Styled.header>
                <Styled.headerText>
                    반복
                </Styled.headerText>
            </Styled.header>
            <Styled.section>
            <Styled.boxes>
                {selectedBox}
            </Styled.boxes>
            </Styled.section>
        </Styled.background>
    )
}

export default Repetition;