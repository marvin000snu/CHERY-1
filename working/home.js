


import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import styled from "styled-components/native"

const Styled = {
    background : styled.View`
        background-color:gold;
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
    `,
    wrap : styled.View`
        margin-bottom: 80px;
        flex :1
    `
}
const Home = ()=>{
    return(
        <Styled.background>
            <Styled.wrap>
            </Styled.wrap>
        </Styled.background>
    )
}

export default Home;
