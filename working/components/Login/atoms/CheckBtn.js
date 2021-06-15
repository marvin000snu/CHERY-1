import React from "react"
import styled from "styled-components"
import CheckIMG from "../../../svg/Check.png"

const CheckBtn = (props) => {
    const { Check, setCheck } = props;
    const Styled = {
        CheckBtn: styled.TouchableOpacity`
            width:18px;
            height:18px;
            border:2px solid #6F87FF;
            background-color:#fff;
            display:flex;
            justify-content:center;
            flex-direction:row;
            align-items:center;
        `,
        CheckIMG: styled.Image`
            width:9px;
            height:6px;
        `,
    }
    if (Check === false) {
        return (
            <Styled.CheckBtn onPress={() => { setCheck(!Check) }} />
        )
    } else {
        return (
            <Styled.CheckBtn onPress={() => { setCheck(!Check) }}>
                <Styled.CheckIMG source={CheckIMG} />
            </Styled.CheckBtn>
        )
    }

}
export default CheckBtn