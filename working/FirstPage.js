import React from "react"
import styled from "styled-components"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import CheryLogo from "./svg/CheryLogo.png"
const Styled ={
    background : styled.View`
        background-color:#5471FF;
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
    `,
    TitleBox:styled.View`
        width:254px;
        height:81px;
        margin-top:45%;
    `,
    IMG:styled.Image`
        width:100%;
        height:100%;
    `,
}
const FirstPage=()=>{
    return(
        <Styled.background>
            <Styled.TitleBox>
                <Styled.IMG source={CheryLogo} />
            </Styled.TitleBox>
        </Styled.background>
    )
}
export default FirstPage